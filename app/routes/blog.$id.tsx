import { Suspense } from "react";

import { createDirectus, readItem, rest } from "@directus/sdk";
import { defer, type MetaFunction } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

import type { Post } from "~/types/post";

import { MiddleSpinner } from "~/components/ui/MiddleSpinner";

export const meta: MetaFunction = () => {
  return [
    { title: "Bayathy | Blog" },
    { name: "description", content: "BayathyのBlogです。" },
  ];
};

export async function loader({ params }: { params: { id: string } }) {
  const client = createDirectus(process.env.CMS_URL as string).with(rest());

  const data = (await client.request(
    readItem("posts", params.id),
  )) as Promise<Post>;

  return defer({ data });
}

export default function Post() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto mt-4 w-full max-w-6xl px-6">
      <Suspense fallback={<MiddleSpinner />}>
        <Await resolve={data}>
          {(data) => (
            <div className="mt-4">
              <h1 className="text-2xl">{data.title}</h1>
              <p>{data.contents}</p>
            </div>
          )}
        </Await>
      </Suspense>
    </main>
  );
}
