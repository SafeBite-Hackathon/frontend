import {
  Box,
  Grid,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Fragment } from "react/jsx-runtime";
import { LuHeart } from "react-icons/lu";

const Recommendations = () => {
  return (
    <Fragment>
      <HStack justifyContent={"space-between"} mb={2}>
        <Text fontWeight={"semibold"}>Rich in protein recipes</Text>

        <HStack>
          <Text color={"gray.400"}>Show all</Text>
          <Icon color={"gray.400"}>
            <FaArrowRightLong color="" />
          </Icon>
        </HStack>
      </HStack>

      <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
        <FoodCard />
        <FoodCard />
      </Grid>
    </Fragment>
  );
};

export default Recommendations;

const FoodCard = () => {
  return (
    <VStack gap={2}>
      <Box position={"relative"} w={"full"}>
        <Image rounded={"lg"} src="/images/dinner.jpg" w={"full"} h={"100px"} />
        <IconButton
          variant={"subtle"}
          backdropFilter="blur(10px)"
          bg={"transparent"}
          blur={"2xl"}
          rounded={"full"}
          position={"absolute"}
          right={2}
          bottom={2}
          size={"sm"}
        >
          <LuHeart color="white" />
        </IconButton>
      </Box>

      <Text color={"green.600"} w="full" textAlign={"left"}>
        Roasted chiken
      </Text>
    </VStack>
  );
};
