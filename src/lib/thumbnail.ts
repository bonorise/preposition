import fs from "fs";
import path from "path";

export type ThumbnailFormat = "png" | "svg";

export function getThumbnailFormat(ids?: string[]): ThumbnailFormat {
  const thumbnailsDir = path.join(process.cwd(), "public", "thumbnails");
  if (ids?.length) {
    const allPng = ids.every((id) =>
      fs.existsSync(path.join(thumbnailsDir, `${id}.png`)),
    );
    return allPng ? "png" : "svg";
  }

  const pngPath = path.join(thumbnailsDir, "in.png");
  return fs.existsSync(pngPath) ? "png" : "svg";
}
