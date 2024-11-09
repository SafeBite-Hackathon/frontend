import { Box, Center, HStack, Text } from "@chakra-ui/react";

const Instructions = () => {
  return (
    <Box px={4} spaceY={4} mb={9}>
      <HStack gap={4} alignItems={"start"}>
        <Center
          flexShrink={0}
          w={6}
          h={6}
          rounded={"full"}
          border={"1px solid"}
          borderColor={"green.600"}
          color={"green.600"}
          fontSize={14}
          fontWeight={"medium"}
        >
          1
        </Center>
        <Text>
          Preheat oven to 425 degrees Fahrenheit and line a baking sheet with
          parchment paper for easy cleanup. Carefully halve the pumpkin and
          scoop out the seeds.
        </Text>
      </HStack>
      <HStack gap={4} alignItems={"start"}>
        <Center
          flexShrink={0}
          w={6}
          h={6}
          rounded={"full"}
          border={"1px solid"}
          borderColor={"green.600"}
          color={"green.600"}
          fontSize={14}
          fontWeight={"medium"}
        >
          2
        </Center>
        <Text>
          Preheat oven to 425 degrees Fahrenheit and line a baking sheet with
          parchment paper for easy cleanup. Carefully halve the pumpkin and
          scoop out the seeds.
        </Text>
      </HStack>
      <HStack gap={4} alignItems={"start"}>
        <Center
          flexShrink={0}
          w={6}
          h={6}
          rounded={"full"}
          border={"1px solid"}
          borderColor={"green.600"}
          color={"green.600"}
          fontSize={14}
          fontWeight={"medium"}
        >
          3
        </Center>
        <Text>
          Preheat oven to 425 degrees Fahrenheit and line a baking sheet with
          parchment paper for easy cleanup. Carefully halve the pumpkin and
          scoop out the seeds.
        </Text>
      </HStack>
    </Box>
  );
};

export default Instructions;
