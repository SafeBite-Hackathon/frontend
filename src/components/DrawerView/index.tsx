import { Fragment } from "react/jsx-runtime";
import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
} from "@chakra-ui/react";
import React from "react";

interface DrawerViewProps {
  children: React.ReactNode;
  isOpen: boolean;

  header?: React.ReactNode;
}

const DrawerView = ({ isOpen, children, header }: DrawerViewProps) => {
  return (
    <Fragment>
      <DrawerRoot open={isOpen} size={"full"}>
        <DrawerContent>
          {header ? <DrawerHeader>{header}</DrawerHeader> : null}
          <DrawerBody p={0}>{children}</DrawerBody>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Fragment>
  );
};

export default DrawerView;
