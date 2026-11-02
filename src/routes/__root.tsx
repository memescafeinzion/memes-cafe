import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Shell } from "@/components/shell";
import { CartProvider } from "@/lib/cart";
import { PLACE } from "@/data/place";
import appCss from "../styles.css?url";

const APP_NAME = "MeMe's Café";
const SHARE_IMAGE = "https://memescafeinzion.github.io/memes-cafe/og.jpg";
const SHARE_DESC =
  "Scratch-made crepes, breakfast, and burgers near Zion National Park. Open daily 8am–9pm in Springdale.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: SHARE_DESC },
      { property: "og:title", content: APP_NAME },
      { property: "og:description", content: SHARE_DESC },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: APP_NAME },
      { name: "twitter:description", content: SHARE_DESC },
      { name: "twitter:image", content: SHARE_IMAGE },
      { name: "theme-color", content: "#16110C" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: `${import.meta.env.BASE_URL}favicon.svg` },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: `${import.meta.env.BASE_URL}__grok/manifest.webmanifest` },
      { rel: "apple-touch-icon", href: `${import.meta.env.BASE_URL}__grok/icon-180.png` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: PLACE.name,
          telephone: "+14357720114",
          email: PLACE.email,
          url: "https://memescafeinzion.github.io/memes-cafe/",
          image: SHARE_IMAGE,
          servesCuisine: ["American", "Breakfast", "Crepes"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "975 Zion Park Blvd",
            addressLocality: "Springdale",
            addressRegion: "UT",
            postalCode: "84767",
            addressCountry: "US",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "08:00",
            closes: "21:00",
          },
        }),
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <CartProvider>
            <Shell>
              <Outlet />
            </Shell>
          </CartProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
