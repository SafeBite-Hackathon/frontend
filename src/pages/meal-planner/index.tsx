import {
  Box,
  Card,
  Center,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa6";
import Recommended from "./components/Recommended";
import BrowseAll from "./components/BrowseAll";
import { BiPlus } from "react-icons/bi";

const MealPlannerPage = () => {
  return (
    <Box px={4} py={4}>
      <Heading fontWeight={"bold"} fontFamily={"Work Sans"} mb={4}>
        Meal planner
      </Heading>

      <Card.Root size={"sm"} variant={"elevated"} mb={8}>
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

      <Recommended />
      <BrowseAll />

      <Box mt={8}>
        <Heading
          fontWeight={"medium"}
          fontSize={24}
          fontFamily={"Work Sans"}
          mb={4}
        >
          Create your own
        </Heading>

        <VStack
          position={"relative"}
          w="full"
          h="190px"
          rounded="lg"
          overflow="hidden"
          justifyContent={"center"}
        >
          <Image
            position={"absolute"}
            src="/images/dinner.jpg"
            w={"full"}
            h={"full"}
            opacity={0.8}
          />
          <Box
            position={"absolute"}
            zIndex={1}
            bg={"red.600"}
            left={0}
            top={0}
            w={"full"}
            h={"full"}
            opacity={0.2}
          />
          <Center
            position={"relative"}
            zIndex={10}
            rounded={"full"}
            bg={"red.700"}
            w={"50px"}
            h={"50px"}
            mb={10}
          >
            <Icon color={"white"} fontSize={"32px"}>
              <BiPlus />
            </Icon>
          </Center>

          <Heading position={"relative"} zIndex={10} fontWeight={"bold"}>
            Create new meal plan
          </Heading>
        </VStack>
      </Box>
    </Box>
  );
};

export default MealPlannerPage;
