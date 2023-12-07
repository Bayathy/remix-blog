import { createDirectus, readItem, rest } from "@directus/sdk";
import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Markdown from "react-markdown";

import type { Post } from "~/types/post";

import { formatDate } from "~/utils/format-date";

export const meta: MetaFunction = () => {
  return [
    { title: "Bayathy | Blog" },
    { name: "description", content: "BayathyのBlogです。" },
  ];
};

export async function loader({ params }: { params: { id: string } }) {
  const client = createDirectus(process.env.CMS_URL as string).with(rest());

  const data = await client.request(readItem("posts", params.id));

  return json({ data });
}

export default function Post() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto mt-4 w-full max-w-6xl px-6">
      <article className="mt-4">
        <h2 className="text-3xl font-medium tracking-tighter">{data.title}</h2>
        <p className="mt-2">{formatDate(data.date_updated)}</p>
        <section className="prose prose-neutral prose-quoteless dark:prose-invert">
          <Markdown>{data.contents}</Markdown>
        </section>
      </article>
    </main>
  );
}
