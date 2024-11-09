import {
  Box,
  Button,
  Card,
  Center,
  Editable,
  HStack,
  Icon,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import PlanMeals from "./PlanMeals";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText,
} from "@/components/ui/progress-circle";
import { FaArrowRightLong } from "react-icons/fa6";

interface Step1Props {
  nextStep: VoidFunction;
}

const Step2 = ({ nextStep }: Step1Props) => {
  return (
    <Box mt={"-50px"} px={4}>
      <Card.Root size={"sm"} variant={"elevated"} mb={8}>
        <Card.Body>
          <Editable.Root
            // value={name}
            // onValueChange={(e) => setName(e.value)}
            placeholder="My meal plan"
            fontWeight={"bold"}
            fontSize={24}
            mb={2}
          >
            <Editable.Preview pl={0} />
            <Editable.Input />
          </Editable.Root>

          <Text color={"gray.400"} fontSize={14}>
            Description
          </Text>
          <Text fontWeight={"medium"} mb={4}>
            Thin and lean. Plan for a "skinny guy" who have a hard time gaining
            weight.
          </Text>

          <Text fontSize={14} color={"gray.400"}>
            Meals per day
          </Text>
          <Text mb={4}>3 meals</Text>
          <Text fontSize={14} color={"gray.400"}>
            Length
          </Text>
          <Text mb={4}>
            1 week <Span color={"gray.400"}>(12.05 - 18.05)</Span>
          </Text>
          <Text fontSize={14} color={"gray.400"}>
            Total meals
          </Text>
          <Text mb={0}>0 meals</Text>
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

      <PlanMeals />

      <HStack mt={8} justifyContent={"space-between"} mb={8}>
        <Text color={"gray.400"} fontWeight={"medium"}>
          Nutritional value
        </Text>
        <HStack>
          <Text color={"gray.400"} fontWeight={"medium"}>
            Show more
          </Text>
          <Icon color={"gray.400"}>
            <FaArrowRightLong />
          </Icon>
        </HStack>
      </HStack>

      <HStack justifyContent={"center"} gap={4} mb={8}>
        <VStack>
          <ProgressCircleRoot value={59} size={"xl"}>
            <ProgressCircleValueText />
            <ProgressCircleRing
              colorPalette={"green"}
              css={{ "--thickness": "4px" }}
              rounded={"full"}
            />
          </ProgressCircleRoot>
          <Text fontWeight={"medium"} color={"gray.400"}>
            Carbs
          </Text>
        </VStack>
        <VStack>
          <ProgressCircleRoot value={16} size={"xl"}>
            <ProgressCircleValueText />
            <ProgressCircleRing
              colorPalette={"green"}
              css={{ "--thickness": "4px" }}
              rounded={"full"}
            />
          </ProgressCircleRoot>
          <Text fontWeight={"medium"} color={"gray.400"}>
            Protein
          </Text>
        </VStack>
        <VStack>
          <ProgressCircleRoot value={25} size={"xl"}>
            <ProgressCircleValueText />
            <ProgressCircleRing
              colorPalette={"green"}
              css={{ "--thickness": "4px" }}
              rounded={"full"}
            />
          </ProgressCircleRoot>
          <Text fontWeight={"medium"} color={"gray.400"}>
            Fat
          </Text>
        </VStack>
      </HStack>

      <Center mt={8}>
        <Button onClick={nextStep} size={"lg"} colorPalette={"red"}>
          <Text textTransform={"uppercase"} fontWeight={"bold"}>
            Save changes
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

export default Step2;
