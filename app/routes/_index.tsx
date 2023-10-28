import { Icon } from "@iconify/react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

import type { MetaFunction } from "@remix-run/node";

import { Header } from "~/components/ui/Header/header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main className="mx-auto mt-4 max-w-5xl px-6">
        <Card>
          <CardHeader>
            <h2 className="text-3xl">About Me</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex items-center justify-around">
              <div>
                <p className="text-xl">Hello. My name is Keito Kobayashi.</p>
              </div>
              <div>
                <Image width={240} className="rounded-full" src="/icon.JPG" />
              </div>
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-end gap-4 px-4">
            <Link href="/blog" as={Link}>
              <Icon icon="tabler:brand-github-filled" width={32} height={32} />
            </Link>
            <Link href="/blog" as={Link}>
              <Icon icon="tabler:brand-twitter-filled" width={32} height={32} />
            </Link>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
