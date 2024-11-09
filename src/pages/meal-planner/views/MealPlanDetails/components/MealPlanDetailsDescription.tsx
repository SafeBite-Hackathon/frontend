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
  Card,
  createListCollection,
  Heading,
  HStack,
  Icon,
  Span,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
import { Fragment } from "react/jsx-runtime";

interface MealPlanDescriptionProps {
  isSelected: boolean;
}

const MealPlanDescription = ({ isSelected }: MealPlanDescriptionProps) => {
  return (
    <Box px={4} mb={8}>
      <Card.Root size={"sm"} variant={"elevated"} mt={"-50px"}>
        <Card.Body>
          <HStack justifyContent={"space-between"} mb={4}>
            <Heading>Protein power</Heading>
            <HStack gap={2.5}>
              <Icon color={"yellow.500"}>
                <FaStar />
              </Icon>
              <Text color={"gray.400"} fontWeight={"semibold"}>
                <Span fontWeight={"bold"}>4.6</Span> (219)
              </Text>
            </HStack>
          </HStack>

          <Text fontSize={14} color={"gray.400"} mb={2}>
            Description
          </Text>

          <Text fontWeight={"medium"}>
            Rich in protein. This meal plan allows all types of meat, fish,
            poultry, eggs, cheese, nonstarchy vegetables, butter, oil and salad
            dressing.
          </Text>

          {isSelected ? (
            <Fragment>
              <SelectRoot
                size={"lg"}
                colorPalette={"green"}
                collection={amountOfMeals}
                mt={4}
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
            </Fragment>
          ) : null}
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default MealPlanDescription;

const amountOfMeals = createListCollection({
  items: [
    {
      label: "1 meal",
      value: "1",
    },
    {
      label: "2 meals",
      value: "2",
    },
    {
      label: "3 meals",
      value: "3",
    },
  ],
});

const planlength = createListCollection({
  items: [
    {
      label: "1 day",
      value: "1",
    },
    {
      label: "3 days",
      value: "3",
    },
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
  ],
});
