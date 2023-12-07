import { memo } from "react";

import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Image,
} from "@nextui-org/react";

type WorkCardProps = {
  title: string;
  description: string;
  image: string;
  github_url?: string;
};

export const WorkCard = memo<WorkCardProps>(
  ({ title, description, image, github_url }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
      <>
        <Card>
          <CardHeader>
            <h2 className="text-xl">{title}</h2>
          </CardHeader>
          <CardBody>
            <div className="mx-auto flex w-3/4 items-center justify-center">
              <Image
                width={400}
                height={260}
                className="aspect-video object-cover"
                src={image}
              />
            </div>
          </CardBody>
          <CardFooter className="flex w-full justify-between">
            {github_url ? (
              <Button
                isIconOnly
                as={Link}
                target="_blank"
                color="primary"
                variant="light"
                href={github_url}
              >
                <Icon icon={"mdi:github"} width={32} height={32} />
              </Button>
            ) : (
              <Button isIconOnly variant="light" disabled isDisabled>
                <Icon icon={"mdi:github"} width={32} height={32} />
              </Button>
            )}
            <Button color="primary" onPress={onOpen}>
              詳しくみる
            </Button>
          </CardFooter>
        </Card>
        <Modal placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="mx-4">
            {(onClose) => (
              <>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                  <p className="whitespace-pre-wrap">{description}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    閉じる
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
);
