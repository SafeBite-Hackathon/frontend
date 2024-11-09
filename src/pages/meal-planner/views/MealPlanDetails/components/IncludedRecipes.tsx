import { RecipeCard } from "@/pages/home/components/Recommendations";
import RecipeDetailsView from "@/views/RecipeDetailsView";
import { Box, Grid, HStack, Icon, Text } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useBoolean } from "usehooks-ts";

const IncludedRecipes = () => {
  const isRecipeDetailsOpen = useBoolean(false);
  return (
    <Box px={4}>
      <RecipeDetailsView
        isOpen={isRecipeDetailsOpen.value}
        onClose={isRecipeDetailsOpen.setFalse}
      />
      <HStack justifyContent={"space-between"} mb={2}>
        <Text fontWeight={"medium"}>Includedd recipes</Text>
        <HStack color={"gray.400"}>
          <Text>Show all</Text>
          <Icon>
            <FaArrowRightLong />
          </Icon>
        </HStack>
      </HStack>

      <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
        {Array.from({ length: 4 }).map((_, index) => (
          <RecipeCard key={index} onClick={isRecipeDetailsOpen.setTrue} />
        ))}
      </Grid>
    </Box>
  );
};

export default IncludedRecipes;
