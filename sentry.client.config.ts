import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3893db1b980f44424529a46d4b2fc921@o4510199565189120.ingest.us.sentry.io/4510199569317888",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],
});
