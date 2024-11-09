import SwipableDeleteCard from "@/components/SwipableDeleteCard";
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { GoFlame } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";

const ShoppingRecipies = () => {
  return (
    <Box>
      <Box spaceY={4}>
        {Array.from({ length: 3 }).map((_, i) => (
          <ShoppingRecipeCard key={i} />
        ))}
      </Box>
      <Center mt={6}>
        <Button colorPalette={"red"} size={"lg"}>
          <Text textTransform={"uppercase"} fontWeight={"bold"}>
            Prpoceed to checkout
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

export default ShoppingRecipies;

const ShoppingRecipeCard = () => {
  return (
    <SwipableDeleteCard onDelete={() => alert("Delete action")}>
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
    </SwipableDeleteCard>
  );
};
