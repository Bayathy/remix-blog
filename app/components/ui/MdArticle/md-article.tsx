import { createElement } from "react";
import type { ClassAttributes, HTMLAttributes, ComponentProps } from "react";

import { Image, Link } from "@nextui-org/react";

import type { Components, ExtraProps } from "react-markdown";

function customLink(props: ComponentProps<"a">) {
  const { href, children } = props;
  if (href!.startsWith("/")) {
    return <Link href={href}>{children}</Link>;
  } else if (href!.startsWith("#")) {
    return <a {...props}>{children}</a>;
  }
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export const slugify = (str: string) => {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replaceAll(/\s+/g, "-") // Replace spaces with -
    .replaceAll("&", "-and-") // Replace & with 'and'
    .replaceAll(/[^\w-]+/g, "") // Remove all non-word characters except for -
    .replaceAll(/--+/g, "-"); // Replace multiple - with single -
};

const createHeading = (level: number) => {
  return function Heading(
    props: ClassAttributes<HTMLHeadingElement> &
      ExtraProps &
      HTMLAttributes<HTMLHeadingElement>,
  ) {
    const children = props.children as string;
    const slug = slugify(children);
    return createElement(
      `h${level}`,
      { id: slug, ...props },
      <a href={`#${slug}`}>
        <span></span>
      </a>,
      children,
    );
  };
};

const createImage = ({ src, alt, title }: ComponentProps<"img">) => {
  return <Image src={src} alt={alt} title={title} />;
};

export const markdownStyle: Partial<Components> = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  img: createImage,

  a: customLink,
};
