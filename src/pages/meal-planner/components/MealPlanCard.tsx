import { Box, Center, Heading, HStack, Image, Text } from "@chakra-ui/react";

const MealPlanCard = () => {
  return (
    <Box
      w={300}
      p={6}
      rounded={"md"}
      flexShrink={0}
      bg={"white"}
      boxShadow={"md"}
    >
      <Box position={"relative"}>
        <Center
          position={"absolute"}
          left={3.5}
          bottom={"18px"}
          bg="red.600"
          px={5}
          py={2.5}
          rounded={"full"}
        >
          <Text textTransform={"uppercase"} fontWeight={"bold"} color={"white"}>
            Most popular
          </Text>
        </Center>
        <Image
          rounded={"md"}
          src="/images/dinner.jpg"
          w={"full"}
          h={"180px"}
          mb={4}
        />
      </Box>

      <Heading
        fontSize={24}
        fontWeight={"bold"}
        fontFamily={"Work Sans"}
        mb={2}
      >
        Mediterranean
      </Heading>
      <Text mb={4}>
        The Mediterranean mealplan is more of a healthy-eating lifestyle than a
        restrictive diet
      </Text>

      <HStack justifyContent={"end"}>
        <Box
          py={2.5}
          px={5}
          bg={"green.50"}
          rounded={"full"}
          color={"green.700"}
        >
          <Text textTransform={"uppercase"} fontWeight={"bold"}>
            Vegetarian
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default MealPlanCard;
