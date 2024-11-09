import DrawerView from "@/components/DrawerView";
import { Box, Button, Center, IconButton, Image, Text } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import MealPlanDescription from "./components/MealPlanDetailsDescription";
import IncludedRecipes from "./components/IncludedRecipes";
import { Fragment } from "react/jsx-runtime";
import MealPlanSelected from "./components/MealPlanSelected";
import { useState } from "react";

interface MealPlanDetailsProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const MealPlanDetails = ({ isOpen, onClose }: MealPlanDetailsProps) => {
  const [step, setStep] = useState(1);

  const view: Record<number, React.ReactNode> = {
    1: (
      <>
        <Fragment>
          <MealPlanDescription isSelected={false} />
          <IncludedRecipes />
          <Center>
            <Button
              onClick={() => setStep(2)}
              mt={10}
              colorPalette={"red"}
              size={"lg"}
            >
              <Text fontWeight={"bold"} textTransform={"uppercase"}>
                Select plan
              </Text>
            </Button>
          </Center>
        </Fragment>
      </>
    ),
    2: (
      <>
        <Fragment>
          <MealPlanDescription isSelected={true} />
          <Center>
            <Button
              mt={10}
              colorPalette={"red"}
              size={"lg"}
              onClick={() => setStep(3)}
            >
              <Text fontWeight={"bold"} textTransform={"uppercase"}>
                Continue
              </Text>
            </Button>
          </Center>
        </Fragment>
      </>
    ),
    3: <MealPlanSelected nextStep={() => setStep(4)} />,
    4: <MealPlanSelected isSaved />,
  };

  return (
    <DrawerView isOpen={isOpen}>
      <Box position={"relative"} pb={6}>
        <Box position={"absolute"} top={4} left={4}>
          <IconButton
            backdropFilter="blur(20px)"
            bg={"transparent"}
            blur={"2xl"}
            rounded={"full"}
            onClick={onClose}
          >
            <FaArrowLeft />
          </IconButton>
        </Box>

        <Box h={"326px"}>
          <Image w={"full"} h={"full"} src="/images/dinner.jpg" />
        </Box>

        {view[step]}
      </Box>
    </DrawerView>
  );
};

export default MealPlanDetails;
