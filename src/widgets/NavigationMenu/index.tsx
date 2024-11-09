import { Box, Center, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const NavigationMenu: FC<{ activeTab: string }> = ({ activeTab }) => {
  return (
    <Box
      py={2}
      // bgColor={"white"}
      backdropFilter="blur(10px)"
      position="absolute"
      left={0}
      right={0}
      bottom={0}
    >
      <Grid templateColumns={"repeat(4, 1fr)"}>
        <Center
          mx={"auto"}
          w={12}
          h={12}
          bg={activeTab === "home" ? "green.200" : "transparent"}
          rounded={"full"}
        >
          <FaHome
            size={24}
            color={activeTab === "home" ? "#22c55e" : "484C52"}
          />
        </Center>
        <Center
          mx={"auto"}
          w={12}
          h={12}
          bg={activeTab === "search" ? "green.200" : "transparent"}
          rounded={"full"}
        >
          <FiSearch
            size={24}
            color={activeTab === "search" ? "#22c55e" : "484C52"}
          />
        </Center>
        <Center
          mx={"auto"}
          w={12}
          h={12}
          bg={activeTab === "cart" ? "green.200" : "transparent"}
          rounded={"full"}
        >
          <FaCartShopping
            size={24}
            color={activeTab === "cart" ? "#22c55e" : "484C52"}
          />
        </Center>
        <Center
          mx={"auto"}
          w={12}
          h={12}
          bg={activeTab === "profile" ? "green.200" : "transparent"}
          rounded={"full"}
        >
          <MdPerson
            size={24}
            color={activeTab === "profile" ? "#22c55e" : "484C52"}
          />
        </Center>
      </Grid>
    </Box>
  );
};

export default NavigationMenu;
