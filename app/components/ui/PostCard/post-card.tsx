import { memo } from "react";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useNavigate } from "@remix-run/react";

import { formatDate } from "~/utils/format-date";

type PostCardProps = {
  id: string;
  title: string;
  date: string;
};

export const PostCard = memo<PostCardProps>(({ id, title, date }) => {
  const router = useNavigate();
  return (
    <Card
      isBlurred
      shadow="md"
      className="w-full bg-background/60 py-4 hover:bg-gray-100 dark:bg-default-100/50"
      isPressable
      onClick={() => router(`/blog/${id}`)}
    >
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <h3 className="text-large font-bold">{title}</h3>
        <small>{formatDate(date)}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2"></CardBody>
    </Card>
  );
});
