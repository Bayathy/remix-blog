import { createDirectus, readItem, readItems, rest } from "@directus/sdk";
import { Image } from "@nextui-org/react";
import { defer, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { SkillCard } from "~/components/ui/SkillCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Bayathy | Home" },
    { name: "description", content: "BayathyのPortfolioです。" },
  ];
};

export async function loader() {
  const client = createDirectus(process.env.CMS_URL as string).with(rest());

  const skills = await client.request(readItems("skills"));
  const aboutMeRes = await client.request(readItem("aboutMe", 1));

  const aboutMe = {
    text: aboutMeRes.text,
    icon: `${process.env.SUPABASE_URL + aboutMeRes.icon}.png`,
  };

  return defer({ aboutMe, skills });
}
export default function Index() {
  const { skills, aboutMe } = useLoaderData<typeof loader>();

  return (
    <>
      <main className="mx-auto mt-4 flex max-w-6xl flex-col gap-8 px-6">
        <section>
          <div className="mt-4 grid place-items-center gap-4 md:grid-flow-col">
            <p className="text-large">{aboutMe.text}</p>
            <Image width={240} height={240} src={aboutMe.icon} radius="full" />
          </div>
        </section>
        <section className="mx-auto grid grid-cols-1 place-items-start gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div className="max-w-md" key={skill.id}>
              <SkillCard
                text={skill.text}
                title={skill.title}
                stack={skill.skillTags}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
