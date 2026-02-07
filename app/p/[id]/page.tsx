import { redirect } from "next/navigation";

import { DEFAULT_LOCALE } from "@/data/i18n";

type PageProps = {
  params: { id: string } | Promise<{ id: string }>;
};

export default async function LegacyPrepositionRedirect({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  redirect(`/${DEFAULT_LOCALE}/p/${resolvedParams.id}`);
}
