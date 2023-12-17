import { Spinner } from "@nextui-org/react";

export const MiddleSpinner = () => {
  return (
    <Spinner
      size="lg"
      className="absolute left-1/2 top-1/2 
      -translate-x-1/2 -translate-y-1/2"
    />
  );
};
