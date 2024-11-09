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
import RecipeDetailsView from "@/views/RecipeDetailsView";
import { useBoolean } from "usehooks-ts";

const Recommendations = () => {
  const isRecipeDetailsOpen = useBoolean(false);

  return (
    <Fragment>
      <RecipeDetailsView
        isOpen={isRecipeDetailsOpen.value}
        onClose={isRecipeDetailsOpen.setFalse}
      />
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
        <RecipeCard onClick={isRecipeDetailsOpen.setTrue} />
        <RecipeCard onClick={isRecipeDetailsOpen.setTrue} />
      </Grid>
    </Fragment>
  );
};

export default Recommendations;

export const RecipeCard = (props: { onClick: VoidFunction }) => {
  const { onClick } = props;

  return (
    <VStack gap={2}>
      <Box position={"relative"} w={"full"} onClick={onClick}>
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
