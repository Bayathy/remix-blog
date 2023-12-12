import type { FC } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Accordion,
  AccordionItem,
  Chip,
} from "@nextui-org/react";

type SkillCardProps = {
  title: string;
  text: string;
  stack: string[];
};

export const SkillCard: FC<SkillCardProps> = ({ title, text, stack }) => {
  return (
    <Card className="min-w-[320px]">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardBody className="pt-2">
        <p>{text}</p>
      </CardBody>
      <CardFooter>
        <Accordion isCompact>
          <AccordionItem title="経験のある技術">
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <Chip key={item} color="secondary">
                  {item}
                </Chip>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
};
