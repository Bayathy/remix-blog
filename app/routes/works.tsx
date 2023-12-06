import { Suspense } from "react";

import { createDirectus, readItems, rest } from "@directus/sdk";
import { defer, type MetaFunction } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

import { MiddleSpinner } from "~/components/ui/MiddleSpinner";
import { WorkCard } from "~/components/ui/WorkCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Bayathy | Works" },
    { name: "description", content: "Bayathyの制作物です。" },
  ];
};

export async function loader() {
  const client = createDirectus(process.env.CMS_URL as string).with(rest());
  const data = client.request(readItems("works")).then((res) =>
    res.map((work) => ({
      id: work.id,
      title: work.title,
      description: work.description,
      github_url: work.github_url,
      image: `${process.env.SUPABASE_URL + work.image}.png`,
    })),
  ) as Promise<Record<string, string>[]>;

  return defer({ data });
}

export default function Works() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto mt-4 w-full max-w-6xl px-6">
      <h1 className="text-2xl">Works</h1>
      <Suspense fallback={<MiddleSpinner />}>
        <div className="mt-4 grid place-content-center gap-4 md:grid-cols-2">
          <Await resolve={data}>
            {(data) =>
              data.map((work) => (
                <WorkCard
                  key={work.id}
                  title={work.title}
                  description={work.description}
                  image={work.image}
                  github_url={work.github_url}
                />
              ))
            }
          </Await>
        </div>
      </Suspense>
    </main>
  );
}
