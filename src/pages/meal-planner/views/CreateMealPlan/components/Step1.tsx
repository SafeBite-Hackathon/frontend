import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import {
  Box,
  Button,
  Card,
  Center,
  createListCollection,
  Editable,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCreateMealPlanStore } from "../model/createMealPlanStore";

interface Step1Props {
  nextStep: VoidFunction;
}

const Step1 = ({ nextStep }: Step1Props) => {
  const [mealPlan, setMealPlan] = useState("");
  const [mealsPerDay, setMealsPerDay] = useState<string[]>([]);
  const [mealPlanLength, setMealPlanLength] = useState<string[]>([]);

  const createMealPlanStore = useCreateMealPlanStore();

  const handleContinue = () => {
    createMealPlanStore.setMealPlanTitle(mealPlan);
    createMealPlanStore.setMealsPerDay(mealsPerDay[0]);
    createMealPlanStore.setMealPlanLength(mealPlanLength[0]);
    nextStep();
  };

  return (
    <Box mt={"-50px"} px={4}>
      <Card.Root size={"sm"} variant={"elevated"} mb={10}>
        <Card.Body>
          <Editable.Root
            value={mealPlan}
            onValueChange={(e) => setMealPlan(e.value)}
            placeholder="My meal plan"
            fontWeight={"bold"}
            fontSize={24}
            mb={2}
          >
            <Editable.Preview pl={0} />
            <Editable.Input />
          </Editable.Root>

          <SelectRoot
            size={"lg"}
            colorPalette={"green"}
            collection={amountOfMeals}
            mt={4}
            value={mealsPerDay}
            onValueChange={(value) => {
              setMealsPerDay(value.value);
            }}
          >
            <SelectLabel>Amount of meals</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder="Select amount of meals" />
            </SelectTrigger>
            <SelectContent>
              {amountOfMeals.items.map((meal) => (
                <SelectItem item={meal} key={meal.value}>
                  {meal.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
          <SelectRoot
            size={"lg"}
            colorPalette={"green"}
            collection={planlength}
            mt={4}
            value={mealPlanLength}
            onValueChange={(value) => {
              setMealPlanLength(value.value);
            }}
          >
            <SelectLabel>Plan length</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder="Select plan length" />
            </SelectTrigger>
            <SelectContent>
              {planlength.items.map((length) => (
                <SelectItem item={length} key={length.value}>
                  {length.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </Card.Body>
      </Card.Root>

      <Center>
        <Button onClick={handleContinue} size={"lg"} colorPalette={"red"}>
          <Text textTransform={"uppercase"} fontWeight={"bold"}>
            continue
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

export default Step1;

const amountOfMeals = createListCollection({
  items: [
    {
      label: "2 meals",
      value: "2",
    },
    {
      label: "3 meals",
      value: "3",
    },
    {
      label: "4 meals",
      value: "4",
    },
    {
      label: "5 meals",
      value: "5",
    },
  ],
});

const planlength = createListCollection({
  items: [
    {
      label: "1 week",
      value: "7",
    },
    {
      label: "2 weeks",
      value: "14",
    },
    {
      label: "3 weeks",
      value: "21",
    },
    {
      label: "5 weeks",
      value: "35",
    },
    {
      label: "10 weeks",
      value: "70",
    },
  ],
});
