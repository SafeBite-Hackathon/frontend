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

interface Step1Props {
  nextStep: VoidFunction;
}

const Step1 = ({ nextStep }: Step1Props) => {
  return (
    <Box mt={"-50px"} px={4}>
      <Card.Root size={"sm"} variant={"elevated"} mb={10}>
        <Card.Body>
          <Editable.Root
            // value={name}
            // onValueChange={(e) => setName(e.value)}
            placeholder="My meal plan"
            fontWeight={"bold"}
            fontSize={24}
            mb={2}
          >
            <Editable.Preview pl={0} />
            <Editable.Input />
          </Editable.Root>

          <Text color={"gray.400"} fontSize={14}>
            Description
          </Text>
          <Text fontWeight={"medium"} mb={4}>
            Thin and lean. Plan for a "skinny guy" who have a hard time gaining
            weight.
          </Text>

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
        </Card.Body>
      </Card.Root>

      <Center>
        <Button onClick={nextStep} size={"lg"} colorPalette={"red"}>
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
