import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
};

export default function RootLayout({ children }: any) {
  return (
    <>
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
    </>
  );
}
