import { Box, Center, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";

const NavigationMenu: FC<{ activeTab: string }> = ({ activeTab }) => {
  return (
    <Box
      py={2}
      borderTop={"1px solid"}
      borderColor={"gray.200"}
      backdropFilter="blur(10px)"
      position="absolute"
      left={0}
      right={0}
      bottom={0}
    >
      <Grid templateColumns={"repeat(4, 1fr)"}>
        <Link to={"/"}>
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
        </Link>
        <Link to={"/mealPlanner"}>
          <Center
            mx={"auto"}
            w={12}
            h={12}
            bg={activeTab === "mealPlanner" ? "green.200" : "transparent"}
            rounded={"full"}
          >
            <MdMenuBook
              size={24}
              color={activeTab === "mealPlanner" ? "#22c55e" : "484C52"}
            />
          </Center>
        </Link>
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
        <Link to={"/profile"}>
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
        </Link>
      </Grid>
    </Box>
  );
};

export default NavigationMenu;
