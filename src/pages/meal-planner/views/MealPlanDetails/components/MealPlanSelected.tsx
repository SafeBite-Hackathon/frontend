import {
  Box,
  Card,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Span,
  Text,
} from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { GoFlame } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";

const MealPlanSelected = () => {
  return (
    <Box px={4} mt="-50px">
      <Card.Root mb={8} size={"sm"} variant={"elevated"}>
        <Card.Body>
          <Heading mb={5} fontSize={24}>
            Protein power
          </Heading>
          <Box spaceY={4}>
            <Box>
              <Text color={"gray.4000"} fontSize={"sm"} mb={2}>
                Meals per day
              </Text>
              <Text fontWeight={"medium"}>3 meals</Text>
            </Box>
            <Box>
              <Text color={"gray.4000"} fontSize={"sm"} mb={2}>
                Length
              </Text>
              <Text fontWeight={"medium"}>
                1 week <Span color={"gray.400"}>(12.05 - 18.05)</Span>
              </Text>
            </Box>
            <Box>
              <Text color={"gray.4000"} fontSize={"sm"} mb={2}>
                Total meals
              </Text>
              <Text fontWeight={"medium"}>15 meals</Text>
            </Box>
          </Box>
        </Card.Body>
      </Card.Root>

      <HStack gap={4} overflowY={"auto"} mb={8}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Center
            key={index}
            textAlign={"center"}
            w={"65px"}
            h={"65px"}
            rounded={"full"}
            bg={index === 0 ? "green.600" : "green.50"}
            color={index === 0 ? "white" : "gray.400"}
            flexShrink={0}
          >
            <Text fontWeight={"bold"}>
              12 <br /> Mon
            </Text>
          </Center>
        ))}
      </HStack>

      <Card.Root variant={"elevated"} size={"sm"}>
        <Card.Body position={"relative"}>
          <Image
            position={"absolute"}
            right={0}
            top={0}
            bottom={0}
            w={"113px"}
            h={"full"}
            roundedRight={"md"}
            src="/images/dinner.jpg"
          />

          <Box position={"absolute"} right={2} bottom={2}>
            <IconButton
              variant={"subtle"}
              backdropFilter="blur(10px)"
              bg={"transparent"}
              blur={"2xl"}
              rounded={"full"}
              size={"sm"}
            >
              <TfiReload color="white" />
            </IconButton>
          </Box>

          <Text color={"gray.400"}>Breakfast</Text>
          <Text mb={2.5} fontWeight={"medium"}>
            Smoothie bowl
          </Text>
          <HStack color={"gray.400"} gap={2.5}>
            <HStack>
              <Icon>
                <FiClock />
              </Icon>
              <Text fontWeight={"medium"}>30 min</Text>
            </HStack>
            <HStack>
              <Icon>
                <GoFlame />
              </Icon>

              <Text fontWeight={"medium"}>450 kcal</Text>
            </HStack>
          </HStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default MealPlanSelected;
