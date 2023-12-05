import { Suspense } from "react";

import { createDirectus, rest, readItems } from "@directus/sdk";
import { Spinner } from "@nextui-org/react";
import { defer, type MetaFunction } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

import type { Post } from "~/types/post";

import { PostCard } from "~/components/ui/PostCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Bayathy | Blog" },
    { name: "description", content: "BayathyのBlogです。" },
  ];
};

export async function loader() {
  const client = createDirectus(process.env.CMS_URL as string).with(rest());

  const data = client.request(readItems("posts")) as Promise<Post[]>;

  return defer({ data });
}

export default function Blog() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto mt-4 w-full max-w-6xl px-6">
      <h1 className="text-2xl">Blog Post</h1>
      <Suspense fallback={<Spinner size="lg" />}>
        <Await resolve={data}>
          {(data) => (
            <div className="mt-4">
              {data.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  date={post.date_updated}
                  id={post.id}
                />
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </main>
  );
}
