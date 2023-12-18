import vercelOGPagesPlugin from "@cloudflare/pages-plugin-vercel-og";

interface Props {
  ogTitle: string;
}

export const onRequest = vercelOGPagesPlugin<Props>({
  imagePathSuffix: "/social-image.png",
  component: ({ ogTitle }) => {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
        }}
      >
        <span
          style={{
            fontSize: "64px",
          }}
        >
          {ogTitle}
        </span>
        <img
          alt="Bayathy"
          src={"https://avatars.githubusercontent.com/u/68783260?v=4"}
          width={64}
          height={64}
          style={{
            position: "absolute",
            bottom: "16",
            right: "16",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
          }}
        />
      </div>
    );
  },
  extractors: {
    on: {
      'meta[property="og:title"]': (props) => ({
        element(element) {
          props.ogTitle = element.getAttribute("content") || "Bayathy";
        },
      }),
    },
  },
  autoInject: {
    openGraph: true,
  },
});
