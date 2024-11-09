import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import { Card, Heading, HStack, Text } from "@chakra-ui/react";

const MealPlanProgress = () => {
  return (
    <Card.Root variant={"elevated"} mb={6}>
      <Card.Body>
        <Heading
          size={"md"}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          mb={4}
        >
          Your mealplan progress
        </Heading>

        <HStack justifyContent={"space-between"} mb={2}>
          <Text color={"gray.500"}>7 weeks out of 10 completed</Text>
          <Text>70%</Text>
        </HStack>

        <ProgressRoot colorPalette={"green"}>
          <ProgressBar rounded={"2xl"} />
        </ProgressRoot>
      </Card.Body>
    </Card.Root>
  );
};

export default MealPlanProgress;
