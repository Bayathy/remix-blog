import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Accordion,
  AccordionItem,
  Chip,
} from "@nextui-org/react";

export const SkillCard = () => {
  return (
    <Card>
      <CardHeader className="flex-col items-start px-4 pb-0 pt-4">
        <h3 className="text-xl font-bold">Front-End</h3>
      </CardHeader>
      <CardBody className="pt-2">
        <p>Reactをメインで使っています。UX面に興味があります。</p>
      </CardBody>
      <CardFooter>
        <Accordion isCompact>
          <AccordionItem title="経験のある技術">
            <div className="flex flex-wrap gap-2">
              <Chip color="secondary">React</Chip>
              <Chip color="secondary">Next.js</Chip>
            </div>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
};
