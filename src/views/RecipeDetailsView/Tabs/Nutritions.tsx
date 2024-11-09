import {
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText,
} from "@/components/ui/progress-circle";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const Nutritions = () => {
  return (
    <Box px={4} spaceY={4} mb={9}>
      <HStack justifyContent={"center"} gap={4} mb={10}>
        <VStack>
          <ProgressCircleRoot value={59} size={"xl"}>
            <ProgressCircleValueText />
            <ProgressCircleRing
              css={{ "--thickness": "4px" }}
              rounded={"full"}
            />
          </ProgressCircleRoot>
          <Text fontWeight={"bold"} color={"gray.400"}>
            Carbs
          </Text>
        </VStack>
        <VStack>
          <ProgressCircleRoot value={16} size={"xl"}>
            <ProgressCircleValueText />
            <ProgressCircleRing
              css={{ "--thickness": "4px" }}
              rounded={"full"}
            />
          </ProgressCircleRoot>
          <Text fontWeight={"bold"} color={"gray.400"}>
            Protein
          </Text>
        </VStack>
        <VStack>
          <ProgressCircleRoot value={25} size={"xl"}>
            <ProgressCircleValueText />
            <ProgressCircleRing
              css={{ "--thickness": "4px" }}
              rounded={"full"}
            />
          </ProgressCircleRoot>
          <Text fontWeight={"bold"} color={"gray.400"}>
            Fat
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Nutritions;
