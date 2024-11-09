import { Box } from "@chakra-ui/react";
import { useOnboardingStore } from "./model/useOnboardingStore";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

const OnboardingPage = () => {
  const step = useOnboardingStore((s) => s.step);

  const stepComponents: Record<number, React.ReactNode> = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
    5: <Step5 />,
  };

  return <Box height={"100dvh"}>{stepComponents[step]}</Box>;
};

export default OnboardingPage;
