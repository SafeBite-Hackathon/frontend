import DrawerView from "@/components/DrawerView";
import { Box, Button, Center, IconButton, Image, Text } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import MealPlanDescription from "./components/MealPlanDetailsDescription";
import IncludedRecipes from "./components/IncludedRecipes";
import { useBoolean } from "usehooks-ts";
import { Fragment } from "react/jsx-runtime";
import MealPlanSelected from "./components/MealPlanSelected";

interface MealPlanDetailsProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const MealPlanDetails = ({ isOpen, onClose }: MealPlanDetailsProps) => {
  const isSelected = useBoolean(false);
  const isCreated = useBoolean(false);

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

        {isCreated.value ? (
          <Fragment>
            <MealPlanDescription isSelected={isSelected.value} />
            {!isSelected.value ? <IncludedRecipes /> : null}
            <Center>
              <Button
                onClick={isSelected.setTrue}
                mt={10}
                colorPalette={"red"}
                size={"lg"}
              >
                <Text fontWeight={"bold"} textTransform={"uppercase"}>
                  {isSelected.value ? "Continue" : "Select plan"}
                </Text>
              </Button>
            </Center>
          </Fragment>
        ) : (
          <MealPlanSelected />
        )}
      </Box>
    </DrawerView>
  );
};

export default MealPlanDetails;
