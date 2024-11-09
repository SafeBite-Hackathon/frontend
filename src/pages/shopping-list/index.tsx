import { Box, Heading, Tabs, Text } from "@chakra-ui/react";
import ShoppingRecipies from "./components/ShoppingRecipies";
import ShoppingIngredients from "./components/ShoppingIngredients";

const ShoppingListPage = () => {
  return (
    <Box p={4}>
      <Heading
        mb={4}
        fontFamily={"Work Sans"}
        fontSize={24}
        fontWeight={"bold"}
      >
        Shopping basket
      </Heading>

      <Tabs.Root colorPalette={"green"} defaultValue="recipies">
        <Tabs.List>
          <Tabs.Trigger value="recipies" flex={1}>
            <Text flex={1} textAlign={"center"} fontWeight={"bold"}>
              Recipies
            </Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="ingredients" flex={1}>
            <Text flex={1} textAlign={"center"} fontWeight={"bold"}>
              Ingridients
            </Text>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="recipies">
          <ShoppingRecipies />
        </Tabs.Content>
        <Tabs.Content value="ingredients">
          <ShoppingIngredients />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default ShoppingListPage;
