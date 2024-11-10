import { Box, Center, HStack, Text } from "@chakra-ui/react";

const Instructions = (props: { instructions: string[] }) => {
  const { instructions } = props;

  return (
    <Box px={4} spaceY={4} mb={9}>
      {instructions?.map((instruction, index) => (
        <HStack key={index} gap={4} alignItems={"start"}>
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
            {index + 1}
          </Center>
          <Text>{instruction}</Text>
        </HStack>
      ))}
    </Box>
  );
};

export default Instructions;
