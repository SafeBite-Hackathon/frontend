import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import NavigationMenu from ".";

const WithNavigation: FC<PropsWithChildren<{ activeTab: string }>> = ({
  children,
  activeTab,
}) => {
  return (
    <Box h={"100dvh"} position={"relative"}>
      <Box h={"100dvh"} overflowY={"auto"} pb={"60px"}>
        {children}
      </Box>
      <NavigationMenu activeTab={activeTab} />
    </Box>
  );
};

export default WithNavigation;
