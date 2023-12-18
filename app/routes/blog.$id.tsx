import type { ReactNode } from "react";
import { Suspense, createElement } from "react";

import { createDirectus, rest, readItem } from "@directus/sdk";
import { Link } from "@nextui-org/react";
import { defer } from "@remix-run/cloudflare";
import { Await, useLoaderData } from "@remix-run/react";
import Markdown from "react-markdown";
import { highlight } from "sugar-high";

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import type { Env } from "~/env";

import { slugify } from "~/components/ui/MdArticle/md-article";
import { formatDate } from "~/utils/format-date";

export const meta: MetaFunction = ({ data }) => {
  const metadata = (data as { metadata: { title: string } }).metadata;
  return [
    { title: `Bayathy | ${metadata.title || "Blog"}` },
    { name: "description", content: "BayathyのBlogです。" },
    { name: "og:title", content: metadata.title },
  ];
};

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  const env = context.env as Env;
  const client = createDirectus(env.CMS_URL as string).with(rest());

  const metadata = await client.request(readItem("posts", params.id!));
  const data = client.request(readItem("posts", params.id!));

  return defer({ data, metadata });
};

const createHeading = (level: number) => {
  return function Heading({ children }: { children: ReactNode }) {
    const slug = slugify(children as string);
    return createElement(
      `h${level}`,
      { id: slug },
      <a href={`#${slugify(children as string)}`} className="no-underline">
        {children}
      </a>
    );
  };
};

export default function Post() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto mt-4 w-full max-w-sm px-2 md:max-w-6xl">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data}>
          {(data) => (
            <article className="mt-4">
              <div className="border-b-2 pb-3">
                <h2 className="text-3xl font-medium tracking-tighter">
                  {data.title}
                </h2>
                <p className="mt-2">{formatDate(data.date_updated)}</p>
                <span>{data.emoji}</span>
              </div>
              <section className="prose mt-8 max-w-full dark:prose-invert">
                <Markdown
                  components={{
                    a: ({ href, children }) => (
                      <Link href={href}>{children}</Link>
                    ),
                    h1: ({ children }) => createHeading(1)({ children }),
                    h2: ({ children }) => createHeading(2)({ children }),
                    h3: ({ children }) => createHeading(3)({ children }),
                    h4: ({ children }) => createHeading(4)({ children }),
                    h5: ({ children }) => createHeading(5)({ children }),
                    h6: ({ children }) => createHeading(6)({ children }),
                    code: ({ children }) => {
                      const codeHtml = highlight(children as string);
                      return (
                        <code dangerouslySetInnerHTML={{ __html: codeHtml }} />
                      );
                    },
                  }}
                >
                  {data.contents}
                </Markdown>
              </section>
            </article>
          )}
        </Await>
      </Suspense>
    </main>
  );
}
