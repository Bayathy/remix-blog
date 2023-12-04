import { createDirectus, readItems, rest } from "@directus/sdk";
import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { WorkCard } from "~/components/ui/WorkCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Bayathy | Works" },
    { name: "description", content: "Bayathyの制作物です。" },
  ];
};

export async function loader() {
  const client = createDirectus(process.env.CMS_URL as string).with(rest());
  const res = await client.request(readItems("works"));

  const data = res.map((work) => ({
    id: work.id,
    title: work.title,
    description: work.description,
    github_url: work.github_url,
    image: `${process.env.SUPABASE_URL + work.image}.png`,
  }));

  return json(data);
}

export default function Works() {
  const data = useLoaderData<typeof loader>();
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
