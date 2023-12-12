import { NextUIProvider } from "@nextui-org/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "@remix-run/react";

import { Footer } from "./components/ui/Footer/footer";
import { Header } from "./components/ui/Header/header";
import stylesheet from "./tailwind.css";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
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
