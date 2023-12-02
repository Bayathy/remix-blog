import type { MetaFunction } from "@remix-run/node";
import { PostCard } from "~/components/ui/PostCard";

import { WorkCard } from "~/components/ui/WorkCard/work-card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Blog() {
  return (
    <main className="mx-auto mt-4 w-full max-w-6xl px-6">
      <h1 className="text-2xl">Blog Post</h1>
      <div className="mt-4">
        <PostCard />
      </div>
    </main>
  );
}
