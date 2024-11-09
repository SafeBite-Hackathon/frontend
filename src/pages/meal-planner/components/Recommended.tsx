import { Box, Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import MealPlanDetails from "../views/MealPlanDetails";
import { useBoolean } from "usehooks-ts";

const Recommended = () => {
  const isMealPlanDetailsOpen = useBoolean(false);

  return (
    <Fragment>
      <MealPlanDetails
        isOpen={isMealPlanDetailsOpen.value}
        onClose={isMealPlanDetailsOpen.setFalse}
      />
      <Heading
        fontWeight={"medium"}
        fontSize={24}
        fontFamily={"Work Sans"}
        mb={4}
      >
        Meal plan <br /> recommended for you
      </Heading>

      <Card.Root
        size={"sm"}
        variant={"elevated"}
        mb={8}
        onClick={isMealPlanDetailsOpen.setTrue}
      >
        <Card.Body>
          <Image src="/images/dinner.jpg" mb={4} />
          <Heading fontWeight={"bold"} fontFamily={"Work Sans"} mb={2}>
            Protein power
          </Heading>

          <Text fontWeight={"medium"} mb={4}>
            This meal plan allows all types of meat, fish, poultry, eggs,
            cheese, nonstarchy vegetables, butter, oil and salad dressing.
          </Text>

          <HStack justifyContent={"end"}>
            <Box
              py={2.5}
              px={5}
              bg={"red.50"}
              rounded={"full"}
              color={"red.700"}
            >
              <Text textTransform={"uppercase"} fontWeight={"bold"}>
                Rich in protein
              </Text>
            </Box>
          </HStack>
        </Card.Body>
      </Card.Root>
    </Fragment>
  );
};

export default Recommended;
