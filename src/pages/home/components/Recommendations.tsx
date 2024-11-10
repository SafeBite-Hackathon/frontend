import {
  Box,
  Grid,
  HStack,
  Icon,
  IconButton,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Fragment } from "react/jsx-runtime";
import { LuHeart } from "react-icons/lu";
import RecipeDetailsView from "@/views/RecipeDetailsView";
import { useGetRecipes } from "../model/getRecipes";
import { components } from "@/types/paths";
import { useState } from "react";

const Recommendations = () => {
  const [openedRecipeId, setOpenedRecipeId] = useState<null | number>(null);
  const { data, isLoading } = useGetRecipes({ page: 1 });

  return (
    <Fragment>
      <RecipeDetailsView
        isOpen={openedRecipeId !== null}
        onClose={() => setOpenedRecipeId(null)}
        recipeId={openedRecipeId || undefined}
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
        {isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton h={"132px"} w={"156px"} key={index} />
            ))}
          </>
        ) : null}
        {data?.results?.map((recipe) => (
          <RecipeCard
            recipe={recipe}
            key={recipe.id}
            onClick={() => setOpenedRecipeId(recipe.id)}
          />
        ))}
      </Grid>
    </Fragment>
  );
};

export default Recommendations;

type Recipe = components["schemas"]["Recipes"];

export const RecipeCard = (props: {
  onClick: VoidFunction;
  recipe: Recipe;
}) => {
  const { onClick, recipe } = props;

  return (
    <VStack gap={2}>
      <Box position={"relative"} w={"full"} onClick={onClick}>
        <Image
          rounded={"lg"}
          src={recipe.images[0].image}
          w={"full"}
          h={"100px"}
        />
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

      <Text color={"green.600"} w="full" textAlign={"left"} lineClamp={1}>
        {recipe.name}
      </Text>
    </VStack>
  );
};
