import { Box } from "@chakra-ui/react";
import { useOnboardingStore } from "../model/useOnboardingStore";

const TOTAL_STEPS = 5;

const OnboardingPagination = () => {
  const { step } = useOnboardingStore();

  return (
    <Box display={"flex"} justifyContent={"center"} gap={8}>
      {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
        <Box
          key={index}
          w={"15px"}
          h={"15px"}
          borderRadius={"50%"}
          outline={"1px solid"}
          outlineColor={"green.600"}
          bg={index + 1 <= step ? "green.600" : "green.50"}
        />
      ))}
    </Box>
  );
};

export default OnboardingPagination;
