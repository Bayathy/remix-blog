import type { MetaFunction } from "@remix-run/node";

import { Header } from "~/components/Header/header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-xl text-red-500">test</h1>
      </div>
    </>
  );
}
