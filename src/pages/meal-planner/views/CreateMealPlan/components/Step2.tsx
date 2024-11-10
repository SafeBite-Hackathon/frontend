import {
  Box,
  Button,
  Card,
  Center,
  Editable,
  HStack,
  Icon,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import PlanMeals from "./PlanMeals";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText,
} from "@/components/ui/progress-circle";
import { FaArrowRightLong } from "react-icons/fa6";
import { useCreateMealPlanStore } from "../model/createMealPlanStore";
import { format, addDays, startOfWeek } from "date-fns";
import { useMemo, useState } from "react";

interface Step1Props {
  nextStep: VoidFunction;
}

const Step2 = ({ nextStep }: Step1Props) => {
  const [selectedDay, setSelectedDay] = useState("");
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

  const days = useMemo(() => {
    const mealPlanLength = +(createMealPlanStore.mealPlanLength || 1);

    const daysArray = Array.from({ length: mealPlanLength }, (_, index) => {
      const date = addDays(new Date(), index);
      return {
        short: format(date, "dd.MM EEE"),
        date: format(date, "dd.MM.yy"),
      };
    });
    return daysArray;
  }, [createMealPlanStore.mealPlanLength]);

  return (
    <Box mt={"-50px"} px={4}>
      <Card.Root size={"sm"} variant={"elevated"} mb={8}>
        <Card.Body>
          <Editable.Root
            value={createMealPlanStore.mealPlanTitle}
            onValueChange={(e) => createMealPlanStore.setMealPlanTitle(e.value)}
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
            <Span color={"gray.400"}>({getWeeklyRanges()})</Span>=
          </Text>
          <Text fontSize={14} color={"gray.400"}>
            Total meals
          </Text>
          <Text mb={0}>{totalMeals} meals</Text>
        </Card.Body>
      </Card.Root>

      <HStack gap={4} overflowY={"auto"} mb={8}>
        {days.map((day, index) => (
          <Center
            key={index}
            textAlign={"center"}
            w={"70px"}
            h={"70px"}
            rounded={"full"}
            bg={day.date === selectedDay ? "green.600" : "green.50"}
            color={day.date === selectedDay ? "white" : "gray.400"}
            flexShrink={0}
            transition={"all 0.2s ease"}
            onClick={() => setSelectedDay(day.date)}
          >
            <Text maxW={"35px"} fontWeight={"bold"}>
              {day.short}
            </Text>
          </Center>
        ))}
      </HStack>

      <PlanMeals />

      <HStack mt={8} justifyContent={"space-between"} mb={8}>
        <Text color={"gray.400"} fontWeight={"medium"}>
          Nutritional value
        </Text>
        <HStack>
          <Text color={"gray.400"} fontWeight={"medium"}>
            Show more
          </Text>
          <Icon color={"gray.400"}>
            <FaArrowRightLong />
          </Icon>
        </HStack>
      </HStack>

      <HStack justifyContent={"center"} gap={4} mb={8}>
        <VStack>
          <ProgressCircleRoot value={59} size={"xl"}>
            <ProgressCircleValueText />
            <ProgressCircleRing
              colorPalette={"green"}
              css={{ "--thickness": "4px" }}
              rounded={"full"}
            />
          </ProgressCircleRoot>
          <Text fontWeight={"medium"} color={"gray.400"}>
            Carbs
          </Text>
        </VStack>
        <VStack>
          <ProgressCircleRoot value={16} size={"xl"}>
            <ProgressCircleValueText />
            <ProgressCircleRing
              colorPalette={"green"}
              css={{ "--thickness": "4px" }}
              rounded={"full"}
            />
          </ProgressCircleRoot>
          <Text fontWeight={"medium"} color={"gray.400"}>
            Protein
          </Text>
        </VStack>
        <VStack>
          <ProgressCircleRoot value={25} size={"xl"}>
            <ProgressCircleValueText />
            <ProgressCircleRing
              colorPalette={"green"}
              css={{ "--thickness": "4px" }}
              rounded={"full"}
            />
          </ProgressCircleRoot>
          <Text fontWeight={"medium"} color={"gray.400"}>
            Fat
          </Text>
        </VStack>
      </HStack>

      <Center mt={8}>
        <Button onClick={nextStep} size={"lg"} colorPalette={"red"}>
          <Text textTransform={"uppercase"} fontWeight={"bold"}>
            Save changes
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

export default Step2;
