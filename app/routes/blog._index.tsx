import { createDirectus, rest, readItems } from "@directus/sdk";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import type { Env } from "~/env";

import { PostCard } from "~/components/ui/PostCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Bayathy | Blog" },
    { name: "description", content: "BayathyのBlogです。" },
    { name: "og:title", content: "Bayathy" },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const env = context.env as Env;
  const client = createDirectus(env.CMS_URL as string).with(rest());

  const data = await client.request(readItems("posts"));

  return json({ data });
};

export default function Blog() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto mt-4 w-full max-w-6xl px-6">
      <h1 className="text-2xl">Blog Post</h1>
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
    </main>
  );
}
