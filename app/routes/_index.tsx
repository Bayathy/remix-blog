import { Suspense } from "react";

import { createDirectus, readItem, readItems, rest } from "@directus/sdk";
import { Image } from "@nextui-org/react";
import { defer, type MetaFunction } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

import { MiddleSpinner } from "~/components/ui/MiddleSpinner";
import { SkillCard } from "~/components/ui/SkillCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Bayathy | Home" },
    { name: "description", content: "BayathyのPortfolioです。" },
  ];
};

export async function loader() {
  const client = createDirectus(process.env.CMS_URL as string).with(rest());

  const skills = client.request(readItems("skills"));
  const aboutMe = client.request(readItem("aboutMe", 1)).then((res) => ({
    icon: `${process.env.SUPABASE_URL + res.icon}.png`,
    text: res.text,
  }));

  return defer({ aboutMe, skills });
}
export default function Index() {
  const { skills, aboutMe } = useLoaderData<typeof loader>();

  return (
    <>
      <main className="mx-auto mt-4 flex max-w-6xl flex-col gap-8 px-6">
        <Suspense fallback={<MiddleSpinner />}>
          <section>
            <div className="mt-4 grid place-items-center gap-4 md:grid-flow-col">
              <Await resolve={aboutMe}>
                {(aboutMe) => (
                  <>
                    <p className="text-large">{aboutMe.text}</p>
                    <Image
                      width={240}
                      height={240}
                      src={aboutMe.icon}
                      radius="full"
                    />
                  </>
                )}
              </Await>
            </div>
          </section>
          <section className="mx-auto grid grid-cols-1 place-items-start gap-4 md:grid-cols-2">
            <Await resolve={skills}>
              {(skills) =>
                skills.map((skill) => (
                  <div className="max-w-md" key={skill.id}>
                    <SkillCard
                      text={skill.text}
                      title={skill.title}
                      stack={skill.skillTags}
                    />
                  </div>
                ))
              }
            </Await>
          </section>
        </Suspense>
      </main>
    </>
  );
}
