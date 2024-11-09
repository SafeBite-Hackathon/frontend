import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import OnboardingPagination from "../../components/OnboardingPagination";
import { ALLERGIES } from "../../constants";
import { useOnboardingStore } from "../../model/useOnboardingStore";
import egg from "../../assets/images/allergies/egg.png";
import milk from "../../assets/images/allergies/milk.png";
import nut from "../../assets/images/allergies/nut.png";
import soybean from "../../assets/images/allergies/soybean.png";
import fish from "../../assets/images/allergies/fish.png";
import wheat from "../../assets/images/allergies/wheat.png";
import celery from "../../assets/images/allergies/celery.png";
import crustacean from "../../assets/images/allergies/crustacean.png";
import mustard from "../../assets/images/allergies/mustard.png";

const Step4 = () => {
  const onboardingStore = useOnboardingStore();

  const handleClick = (goal: string) => {
    onboardingStore.setNewAllergies(goal);
  };

  const isChecked = (title: string) => {
    return onboardingStore.allergies.includes(title);
  };

  const ALLERGY_IMAGES: Record<string, string> = {
    egg: egg,
    milk: milk,
    nut: nut,
    soybean: soybean,
    fish: fish,
    wheat: wheat,
    celery: celery,
    crustacean: crustacean,
    mustard: mustard,
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
        Any allergies?
      </Text>
      <Grid templateColumns={"repeat(3, 1fr)"} gapX={6} gapY={4}>
        {ALLERGIES.map((a, index) => (
          <Box key={index} onClick={() => handleClick(a.title)}>
            <Box position={"relative"} w={70} h={70} mx={"auto"}>
              {isChecked(a.title) ? (
                <Image
                  position={"absolute"}
                  left={0}
                  right={0}
                  w={70}
                  mx={"auto"}
                  h={70}
                  zIndex={10}
                  src="/no-sign.png"
                />
              ) : null}
              <Image
                objectFit={"cover"}
                objectPosition={"center"}
                mx={"auto"}
                src={ALLERGY_IMAGES[a.image]}
              />
            </Box>
            <Text textAlign={"center"}>{a.title}</Text>
          </Box>
        ))}
      </Grid>

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
          mb={"60px"}
          onClick={onboardingStore.nextStep}
        >
          Continue
        </Button>

        <OnboardingPagination />
      </Box>
    </Box>
  );
};

export default Step4;
