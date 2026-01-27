import { spawn } from "child_process";
import fs from "fs";
import http from "http";
import path from "path";

import puppeteer from "puppeteer-core";

import { PREPOSITIONS } from "../src/data/prepositions";

const DEFAULT_PORT = 3001;
const OUT_DIR = path.join(process.cwd(), "public", "thumbnails");
const CHROME_PATH =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function waitForServerReady(baseUrl: string) {
  const deadline = Date.now() + 30_000;
  return new Promise<void>((resolve, reject) => {
    const attempt = () => {
      const req = http.get(baseUrl, (res) => {
        res.resume();
        resolve();
      });
      req.on("error", () => {
        if (Date.now() > deadline) {
          reject(new Error("Next dev server did not start in time"));
          return;
        }
        setTimeout(attempt, 500);
      });
    };
    attempt();
  });
}

function probeServer(baseUrl: string) {
  return new Promise<boolean>((resolve) => {
    const req = http.get(baseUrl, (res) => {
      res.resume();
      resolve(true);
    });
    req.on("error", () => resolve(false));
    req.setTimeout(1500, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function capture() {
  if (!fs.existsSync(CHROME_PATH)) {
    throw new Error(`Chrome not found at ${CHROME_PATH}`);
  }

  let serverUrl = process.env.THUMBNAIL_SERVER_URL;
  let serverProcess: ReturnType<typeof spawn> | null = null;

  if (!serverUrl) {
    const candidates = ["http://localhost:3000", "http://localhost:3001"];
    for (const candidate of candidates) {
      const ok = await probeServer(candidate);
      if (ok) {
        serverUrl = candidate;
        break;
      }
    }
  }

  if (!serverUrl) {
    const port = DEFAULT_PORT;
    serverUrl = `http://localhost:${port}`;
    serverProcess = spawn(
      process.platform === "win32" ? "npm.cmd" : "npm",
      ["run", "dev", "--", "-p", String(port)],
      {
        stdio: "inherit",
        env: {
          ...process.env,
          NEXT_TELEMETRY_DISABLED: "1",
        },
      },
    );
    await waitForServerReady(serverUrl);
  }

  try {
    console.log(`Using server: ${serverUrl}`);
    const headlessMode: boolean | "shell" =
      process.env.HEADLESS === "false"
        ? false
        : process.env.HEADLESS === "shell"
          ? "shell"
          : true;
    const browser = await puppeteer.launch({
      executablePath: CHROME_PATH,
      headless: headlessMode,
      pipe: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--enable-webgl",
        "--ignore-gpu-blocklist",
        "--use-gl=swiftshader",
      ],
    });

    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000);
    await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 2 });

    fs.mkdirSync(OUT_DIR, { recursive: true });

    for (const entry of PREPOSITIONS) {
      const url = `${serverUrl}/p/${entry.id}?thumb=1`;
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await page.waitForSelector("canvas", { timeout: 15_000 });
      await new Promise((resolve) => setTimeout(resolve, 400));

      const canvas =
        (await page.$('[data-viewer=\"preposition\"] canvas')) ??
        (await page.$("canvas"));
      if (!canvas) {
        throw new Error(`Canvas not found for ${entry.id}`);
      }

      const outputPath = path.join(OUT_DIR, `${entry.id}.png`);
      await canvas.screenshot({ path: outputPath, type: "png" });
      console.log(`Captured ${entry.id}`);
    }

    await browser.close();
  } finally {
    if (serverProcess) {
      serverProcess.kill("SIGTERM");
    }
  }
}

capture().catch((error) => {
  console.error(error);
  process.exit(1);
});
