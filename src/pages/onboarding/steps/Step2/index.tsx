import { Box, Card, Text } from "@chakra-ui/react";
import OnboardingPagination from "../../components/OnboardingPagination";
import { ONBOARDING_GOALS } from "../../constants";
import { useOnboardingStore } from "../../model/useOnboardingStore";
import { usePatchUserPreferences } from "../../model/patchUserPreferences";

const Step2 = () => {
  const onboardingStore = useOnboardingStore();

  const patchPreference = usePatchUserPreferences();

  const handleClick = (goal: string) => {
    patchPreference.mutate({
      diet_goal: goal,
    });
    onboardingStore.setGoal(goal);
    onboardingStore.nextStep();
  };

  return (
    <Box px={11} pt={"100px"} height={"full"} position={"relative"}>
      <Text
        fontSize={24}
        color={"green.600"}
        fontWeight={"bold"}
        lineHeight={"24px"}
        mb={8}
        textAlign={"center"}
      >
        What’s your diet goal?
      </Text>
      <Box spaceY={4}>
        {ONBOARDING_GOALS.map((goal, index) => (
          <Card.Root
            key={index}
            size={"sm"}
            variant={"elevated"}
            onClick={() => handleClick(goal.value)}
          >
            <Card.Body gap="2">
              <Card.Title>{goal.title}</Card.Title>
              <Card.Description>{goal.description}</Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
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
        <OnboardingPagination />
      </Box>
    </Box>
  );
};

export default Step2;
