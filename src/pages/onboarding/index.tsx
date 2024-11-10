import { Box } from "@chakra-ui/react";
import { useOnboardingStore } from "./model/useOnboardingStore";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import GetInfo from "./steps/GetInfo";
import GetPreferences from "./steps/GetPreferences";

const OnboardingPage = () => {
  const step = useOnboardingStore((s) => s.step);

  const stepComponents: Record<number, React.ReactNode> = {
    1: <Step1 />,
    2: <Step2 />,
    3: <GetInfo />,
    4: <Step3 />,
    5: <Step4 />,
    6: <GetPreferences />,
    7: <Step5 />,
  };

  return <Box height={"100dvh"}>{stepComponents[step]}</Box>;
};

export default OnboardingPage;
