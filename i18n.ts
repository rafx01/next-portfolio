import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["pt-br", "en-us"];

export default getRequestConfig(async ({ locale }) => {
  !locales.includes(locales as any) && notFound();

  return {
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
