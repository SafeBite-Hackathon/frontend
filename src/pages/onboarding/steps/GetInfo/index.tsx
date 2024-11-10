import { Box, Button, Text } from "@chakra-ui/react";
import OnboardingPagination from "../../components/OnboardingPagination";
import { Field } from "@/components/ui/field";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";
import { useOnboardingStore } from "../../model/useOnboardingStore";
import { usePatchUserPreferences } from "../../model/patchUserPreferences";

const GetInfo = () => {
  const {
    nextStep,
    currentWeight,
    goalWeight,
    setCurrentWeight,
    setGoalWeight,
  } = useOnboardingStore();

  const patchPreference = usePatchUserPreferences();

  const handleSubmit = () => {
    patchPreference.mutate({
      current_weight: +currentWeight,
      goal_weight: +goalWeight,
    });
    nextStep();
  };

  return (
    <Box px={11} pt={"100px"} height={"full"} position={"relative"} w={"full"}>
      <Text
        fontSize={24}
        color={"green.600"}
        fontWeight={"bold"}
        lineHeight={"24px"}
        mb={8}
        textAlign={"center"}
      >
        Tell us about yourself
      </Text>
      <Box
        spaceY={4}
        w={"full"}
        bg={"white"}
        shadow={"md"}
        p={4}
        rounded={"lg"}
      >
        <Field label="Your current weight (kg)">
          <NumberInputRoot min={0} max={1000} w={"full"}>
            <NumberInputField
              value={currentWeight}
              onChange={(val) => setCurrentWeight(val.target.value)}
            />
          </NumberInputRoot>
        </Field>
        <Field label="Your goal weight (kg)">
          <NumberInputRoot min={0} max={1000} w={"full"}>
            <NumberInputField
              value={goalWeight}
              onChange={(val) => setGoalWeight(val.target.value)}
            />
          </NumberInputRoot>
        </Field>

        {/* <SelectRoot
          size={"lg"}
          colorPalette={"green"}
          collection={activityLevels}
          mt={4}
        >
          <SelectLabel>Your activity level</SelectLabel>
          <SelectTrigger>
            <SelectValueText placeholder="Select plan length" />
          </SelectTrigger>
          <SelectContent>
            {activityLevels.items.map((level) => (
              <SelectItem item={level} key={level.value}>
                {level.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <Field label="Period (weeks)">
          <NumberInputRoot min={0} max={1000} w={"full"}>
            <NumberInputField />
          </NumberInputRoot>
        </Field> */}
      </Box>

      <Box
        position={"absolute"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        left={0}
        right={0}
        bottom={10}
      >
        <Button
          colorPalette={"green"}
          variant={"subtle"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          mb={"36px"}
          onClick={handleSubmit}
        >
          Continue
        </Button>
        <OnboardingPagination />
      </Box>
    </Box>
  );
};

export default GetInfo;

// const activityLevels = createListCollection({
//   items: [
//     {
//       label: "Sedentary",
//       value: "Sedentary",
//     },
//     {
//       label: "Quite active",
//       value: "Quite active",
//     },
//     {
//       label: "Active",
//       value: "Active",
//     },
//     {
//       label: "Very active",
//       value: "Very active",
//     },
//   ],
// });
