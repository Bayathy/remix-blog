import { Image } from "@nextui-org/react";

import type { MetaFunction } from "@remix-run/node";

import { Header } from "~/components/ui/Header/header";
import { PostCard } from "~/components/ui/PostCard/post-card";

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
      <main className="mx-auto mt-4 flex max-w-6xl flex-col gap-8 px-6">
        <section>
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-4 grid place-items-center gap-4 md:grid-flow-col">
            <p className="text-large">My name is Keito Kobaayshi.</p>
            <Image width={240} src="/icon.JPG" radius="full" />
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold">Blog Posts</h2>
          <ol className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </ol>
        </section>
      </main>
    </>
  );
}
