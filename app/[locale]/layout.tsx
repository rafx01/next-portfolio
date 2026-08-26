import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
// import * as Sentry from "@sentry/nextjs";

// // Add or edit your "generateMetadata" to include the Sentry trace data:
// export function generateMetadata(): Metadata {
//   return {
//     // ... your existing metadata
//     other: {
//       ...Sentry.getTraceData(),
//     },
//   };
// }

export const metadata: Metadata = {
  title: "Portfolio de Raphael",
  description: "Portfolio moderno feito com NextJS",
  icons: {
    icon: "/favicon.ico",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
