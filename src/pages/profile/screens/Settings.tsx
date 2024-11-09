import DrawerView from "@/components/DrawerView";
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
                  Build muscles
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
            <Text>79kg on 22/08/2020</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"}>Current weight</Text>
            <Text>82 kg</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"}>Goal weight</Text>
            <Text>90 kg</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"}>Weekly goal</Text>
            <Text>Gain 0.5 kg</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"}>Activity level</Text>
            <Text>Quite active</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"}>Period</Text>
            <Text>10 weeks</Text>
          </HStack>
        </Box>
      </Box>
    </DrawerView>
  );
};

export default Settings;
