import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export const WorkCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card>
        <CardHeader>
          <h2 className="text-xl">Togather</h2>
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-center w-3/4 mx-auto">
            <Image
              width={400}
              height={260}
              src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
          </div>
        </CardBody>
        <CardFooter className="flex justify-between w-full">
          <Button
            isIconOnly
            as={Link}
            target="_blank"
            color="primary"
            variant="light"
            href="https://github.com/Bayathy"
          >
            <Icon icon={"mdi:github"} width={32} height={32} />
          </Button>
          <Button color="primary" onPress={onOpen}>
            詳しくみる
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Title</ModalHeader>
              <ModalBody>これは何何するためのものです</ModalBody>
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
};
