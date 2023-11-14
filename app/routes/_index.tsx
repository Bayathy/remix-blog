import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";

import type { MetaFunction } from "@remix-run/node";

import { SkillCard } from "~/components/ui/SkillCard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <main className="mx-auto mt-4 flex max-w-6xl flex-col gap-8 px-6">
        <section>
          <div className="mt-4 grid place-items-center gap-4 md:grid-flow-col">
            <p className="text-large">My name is Keito Kobaayshi.</p>
            <Image width={240} src="/icon.JPG" radius="full" />
          </div>
        </section>
        <section className="mx-auto grid grid-cols-1 place-items-start gap-4 md:grid-cols-2">
          <div className="max-w-md">
            <SkillCard />
          </div>
          <div className="max-w-md">
            <Card>
              <CardHeader className="flex-col items-start px-4 pb-0 pt-4">
                <h3 className="text-xl font-bold">Back-End</h3>
              </CardHeader>
              <CardBody className="pt-2">
                <p>Node.jsをメインで使っています。API設計に興味があります。</p>
              </CardBody>
              <CardFooter>
                <Accordion isCompact>
                  <AccordionItem title="経験のある技術">
                    <div className="flex flex-wrap gap-2">
                      <Chip color="secondary">Node.js</Chip>
                      <Chip color="secondary">Express</Chip>
                    </div>
                  </AccordionItem>
                </Accordion>
              </CardFooter>
            </Card>
          </div>
          <div className="max-w-md">
            <Card>
              <CardHeader className="flex-col items-start px-4 pb-0 pt-4">
                <h3 className="text-xl font-bold">Back-End</h3>
              </CardHeader>
              <CardBody className="pt-2">
                <p>Node.jsをメインで使っています。API設計に興味があります。</p>
              </CardBody>
              <CardFooter>
                <Accordion isCompact>
                  <AccordionItem title="経験のある技術">
                    <div className="flex flex-wrap gap-2">
                      <Chip color="secondary">Node.js</Chip>
                      <Chip color="secondary">Express</Chip>
                    </div>
                  </AccordionItem>
                </Accordion>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
