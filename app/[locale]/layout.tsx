import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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

export default async function RootLayout({ children }: any) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
