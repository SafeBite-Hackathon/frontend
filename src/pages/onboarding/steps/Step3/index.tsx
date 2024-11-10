import { Box, Card, Image, Text } from "@chakra-ui/react";
import OnboardingPagination from "../../components/OnboardingPagination";
import { DIET_TYPES } from "../../constants";
import { useOnboardingStore } from "../../model/useOnboardingStore";
import groeceriesPng from "../../assets/images/diets/groceries.png";
import pescatarian from "../../assets/images/diets/pescatarian.png";
import omlette from "../../assets/images/diets/omelette.png";
import vegan from "../../assets/images/diets/vegan.png";
import { usePatchUserPreferences } from "../../model/patchUserPreferences";

const Step3 = () => {
  const onboardingStore = useOnboardingStore();
  const patchPreference = usePatchUserPreferences();

  const handleClick = (goal: string) => {
    patchPreference.mutate({
      diet_type: goal,
    });
    onboardingStore.setDiet(goal);
    onboardingStore.nextStep();
  };

  const DIET_IMAGES: Record<string, string> = {
    groceries: groeceriesPng,
    pescatarian: pescatarian,
    omlette: omlette,
    vegan: vegan,
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
        What’s your diet type?
      </Text>
      <Box spaceY={4}>
        {DIET_TYPES.map((diet, index) => (
          <Card.Root
            key={index}
            size={"sm"}
            variant={"elevated"}
            onClick={() => handleClick(diet.value)}
          >
            <Card.Body gap="2">
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
              >
                <Box>
                  <Card.Title>{diet.title}</Card.Title>
                  <Card.Description>{diet.description}</Card.Description>
                </Box>
                <Box>
                  <Image src={DIET_IMAGES[diet.image]} />
                </Box>
              </Box>
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

export default Step3;
