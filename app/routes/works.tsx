import type { MetaFunction } from "@remix-run/node";

import { WorkCard } from "~/components/ui/WorkCard/work-card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Works() {
  return (
    <main className="mx-auto mt-4 w-full max-w-6xl px-6">
      <h1 className="text-2xl">Works</h1>
      <div className="grid md:grid-cols-2 mt-4 gap-4 place-content-center">
        <WorkCard />
        <WorkCard />
      </div>
    </main>
  );
}
