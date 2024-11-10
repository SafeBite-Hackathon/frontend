import DrawerView from "@/components/DrawerView";
import { DIET_GOAL } from "@/pages/onboarding/constants";
import { useGetUserPreferences } from "@/shared/model/getUserPreferences";
import {
  Box,
  Card,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa6";

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
};

const Settings: FC<Props> = ({ isOpen, onClose }) => {
  const userPreferences = useGetUserPreferences();

  return (
    <DrawerView
      isOpen={isOpen}
      header={
        <IconButton onClick={onClose} variant={"subtle"} colorPalette={"green"}>
          <FaArrowLeft />
        </IconButton>
      }
    >
      <Box p={4}>
        <Heading
          size={"2xl"}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          mb={5}
        >
          My goal
        </Heading>
        <Card.Root variant={"elevated"} mb={12}>
          <Card.Body>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Image src="/images/settings-goal-icon.png" />
              <Box flex={1}>
                <Text color={"gray.400"}>Your goal</Text>
                <Text fontWeight={"semibold"} fontSize={24}>
                  {DIET_GOAL[userPreferences.data?.diet_goal || ""]}
                </Text>
              </Box>
              <Center>
                <Icon fontSize={24}>
                  <FaChevronRight />
                </Icon>
              </Center>
            </HStack>
          </Card.Body>
        </Card.Root>

        <Box spaceY={8}>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"}>Starting weight</Text>
            <Text>{userPreferences.data?.current_weight}kg on 22/08/2020</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"}>Current weight</Text>
            <Text>{userPreferences.data?.current_weight} kg</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"}>Goal weight</Text>
            <Text>{userPreferences.data?.goal_weight} kg</Text>
          </HStack>
        </Box>
      </Box>
    </DrawerView>
  );
};

export default Settings;
