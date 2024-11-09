import DrawerView from "@/components/DrawerView";
import { Box, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

interface CreateMealPlanProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const CreateMealPlan = ({ isOpen, onClose }: CreateMealPlanProps) => {
  const [step, setStep] = useState(1);

  const view: Record<number, React.ReactNode> = {
    1: <Step1 nextStep={() => setStep(2)} />,
    2: <Step2 nextStep={() => setStep(3)} />,
    3: <Step3 nextStep={() => setStep(4)} />,
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
        <Box position={"absolute"} top={4} right={4}>
          <IconButton
            backdropFilter="blur(20px)"
            bg={"transparent"}
            blur={"2xl"}
            rounded={"full"}
            onClick={onClose}
          >
            <IoCameraOutline />
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

export default CreateMealPlan;
