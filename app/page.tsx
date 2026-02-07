import { redirect } from "next/navigation";

import { DEFAULT_LOCALE } from "@/data/i18n";

export default function LegacyHomeRedirect() {
  redirect(`/${DEFAULT_LOCALE}`);
}
