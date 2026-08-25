import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["pt-br", "en-us"],

  defaultLocale: "en-us",
});

export const config = {
  matcher: ["/", "/(pt-br|en-us)/:path*"],
};
