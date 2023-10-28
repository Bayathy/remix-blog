import { memo } from "react";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useNavigate } from "@remix-run/react";

export const PostCard = memo(() => {
  const router = useNavigate();
  return (
    <Card
      isBlurred
      shadow="md"
      className="w-full bg-background/60 py-4 dark:bg-default-100/50"
      isPressable
      onClick={() => router("/blog")}
    >
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-large font-bold">Blog Title</p>
        <small>2021/10/10</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2"></CardBody>
    </Card>
  );
});
