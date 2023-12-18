import { NextUIProvider } from "@nextui-org/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "@remix-run/react";

import { Footer } from "./components/ui/Footer";
import { Header } from "./components/ui/Header";
import stylesheet from "./globals.css";

import type { LinksFunction } from "@remix-run/cloudflare";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "icon",
    sizes: "32x32",
    href: "/favicon_32.ico",
  },
  {
    rel: "icon",
    sizes: "64x64",
    href: "/favicon_64.ico",
  },
  {
    rel: "icon",
    sizes: "128x128",
    href: "/favicon_128.ico",
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const navigate = useNavigate();
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider navigate={navigate}>
          <div className="grid min-h-screen w-screen grid-cols-[1fr] grid-rows-[auto_1fr_auto] overflow-hidden">
            <Header />
            <Outlet />
            <Footer />
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
