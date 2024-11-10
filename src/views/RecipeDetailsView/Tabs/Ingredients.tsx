import { Box, Center, EmptyState, HStack, Icon, Text } from "@chakra-ui/react";
import { MdOutlineDone } from "react-icons/md";

const IngredientsTab = (props: { ingredients: string[] }) => {
  const { ingredients } = props;

  return (
    <Box pb={4}>
      <Box px={4} spaceY={4} mb={9}>
        {!ingredients.length ? (
          <Box>
            <EmptyState.Root>
              <EmptyState.Description>
                <Text textAlign={"center"} fontWeight={"semibold"}>
                  No ingredients
                </Text>
              </EmptyState.Description>
            </EmptyState.Root>
          </Box>
        ) : null}
        {ingredients?.map((ing, index) => (
          <HStack key={index} gap={4}>
            <Center
              flexShrink={0}
              rounded={"full"}
              w={6}
              h={6}
              bg={"green.100"}
            >
              <Icon color={"green.600"}>
                <MdOutlineDone />
              </Icon>
            </Center>
            <Text fontWeight={"medium"}>{ing}</Text>
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default IngredientsTab;
