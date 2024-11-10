import {
  Box,
  Button,
  Card,
  Center,
  Editable,
  Image,
  Span,
  Text,
} from "@chakra-ui/react";
import { useCreateMealPlanStore } from "../model/createMealPlanStore";
import { addDays, format, startOfWeek } from "date-fns";
import { Link } from "react-router-dom";

interface Step1Props {
  nextStep: VoidFunction;
}

const Step3 = ({ nextStep }: Step1Props) => {
  const createMealPlanStore = useCreateMealPlanStore();

  const totalMeals =
    +(createMealPlanStore.mealPlanLength || 0) *
    +(createMealPlanStore.mealsPerDay || 0);

  const getWeeklyRanges = () => {
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 }); // Set week to start on Monday
    const endDate = addDays(
      startDate,
      +(createMealPlanStore.mealPlanLength || 1) - 1
    );
    return `${format(startDate, "dd.MM.yy")} - ${format(endDate, "dd.MM.yy")}`;
  };

  return (
    <Box mt={"-50px"} px={4}>
      <Card.Root size={"sm"} variant={"elevated"} mb={8}>
        <Card.Body>
          <Editable.Root
            value={createMealPlanStore.mealPlanTitle}
            // onValueChange={(e) => setName(e.value)}
            placeholder="My meal plan"
            fontWeight={"bold"}
            fontSize={24}
            mb={2}
          >
            <Editable.Preview pl={0} />
            <Editable.Input />
          </Editable.Root>

          <Text fontSize={14} color={"gray.400"}>
            Meals per day
          </Text>
          <Text mb={4}>{createMealPlanStore.mealsPerDay} meals</Text>
          <Text fontSize={14} color={"gray.400"}>
            Length
          </Text>
          <Text mb={4}>
            {createMealPlanStore.mealPlanLength} week{" "}
            <Span color={"gray.400"}>({getWeeklyRanges()})</Span>
          </Text>
          <Text fontSize={14} color={"gray.400"}>
            Total meals
          </Text>
          <Text mb={0}>{totalMeals} meals</Text>
        </Card.Body>
      </Card.Root>

      <Box pt={2.5}>
        <Text
          maxW={"221px"}
          textAlign={"center"}
          mx={"auto"}
          fontWeight={"medium"}
          mb={8}
        >
          Inredients for 140 recipies will be added to your basket.{" "}
        </Text>
        <Center mb={12}>
          <Image src="/images/basket.png" />
        </Center>
        <Center>
          <Link to={"/shoppingList"}>
            <Button colorPalette={"red"} size={"lg"}>
              <Text textTransform={"uppercase"} fontWeight={"bold"}>
                Confirm
              </Text>
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default Step3;
