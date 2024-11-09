import {
  Box,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  Portal,
} from "@chakra-ui/react";
import React from "react";

interface DrawerViewProps {
  children: React.ReactNode;
  isOpen: boolean;

  header?: React.ReactNode;
}

const DrawerView = ({ isOpen, children, header }: DrawerViewProps) => {
  return (
    <Portal>
      <Box
        position={"fixed"}
        top={0}
        zIndex={30}
        left={0}
        right={0}
        bottom={0}
        pointerEvents={isOpen ? "all" : "none"}
      >
        <DrawerRoot open={isOpen} size={"full"}>
          <DrawerContent>
            {header ? <DrawerHeader>{header}</DrawerHeader> : null}
            <DrawerBody p={0}>{children}</DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Box>
    </Portal>
  );
};

export default DrawerView;
