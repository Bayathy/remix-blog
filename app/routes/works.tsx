import { createDirectus, rest, readItems } from "@directus/sdk";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import type { Env } from "~/env";

import { WorkCard } from "~/components/ui/WorkCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Bayathy | Works" },
    { name: "description", content: "Bayathyの制作物です。" },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const env = context.env as Env;

  const client = createDirectus(env.CMS_URL as string).with(rest());
  const res = await client.request(readItems("works"));

  const data = res.map((work) => ({
    id: work.id,
    title: work.title,
    description: work.description,
    image: `${env.SUPABASE_URL + work.image}.png`,
    github_url: work.github_url,
  }));

  return json({ data });
};

export default function Works() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto mt-4 w-full max-w-6xl px-6">
      <h1 className="text-2xl">Works</h1>
      <div className="mt-4 grid place-content-center gap-4 md:grid-cols-2">
        {data.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            description={work.description}
            image={work.image}
            github_url={work.github_url}
          />
        ))}
      </div>
    </main>
  );
}
