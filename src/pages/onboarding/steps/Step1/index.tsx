import { Box, Button, Image, Text } from "@chakra-ui/react";
import step1Image from "../../assets/images/step1.png";
import OnboardingPagination from "../../components/OnboardingPagination";
import { useOnboardingStore } from "../../model/useOnboardingStore";

const Step1 = () => {
  const { nextStep } = useOnboardingStore();

  return (
    <Box px={11} pt={"100px"} height={"full"} position={"relative"}>
      <Text
        fontSize={24}
        color={"green.600"}
        fontWeight={"bold"}
        lineHeight={"24px"}
        mb={73}
      >
        Delicious recipies and personalized mealplans
      </Text>
      <Box height={190} mx={"auto"} display={"flex"} justifyContent={"center"}>
        <Image src={step1Image} />
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
          mb={"94px"}
          onClick={nextStep}
        >
          Continue
        </Button>

        <OnboardingPagination />
      </Box>
    </Box>
  );
};

export default Step1;
