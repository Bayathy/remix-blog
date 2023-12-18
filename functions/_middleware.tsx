import vercelOGPagesPlugin from "@cloudflare/pages-plugin-vercel-og";

type Props = {
  title: string;
};

export const onRequest = vercelOGPagesPlugin<Props>({
  imagePathSuffix: "/og-image.png",
  component: ({ title }) => {
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
          {title}
        </span>
        <img
          src={"/ogp.png"}
          alt="icon"
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
          props.title = element.getAttribute("content") || "Bayathy";
        },
      }),
    },
  },
  autoInject: {
    openGraph: true,
  },
});
