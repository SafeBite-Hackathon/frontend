import SwipableDeleteCard from "@/components/SwipableDeleteCard";
import { Box, HStack, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { GoFlame } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";

type Props = {
  isDeleteDisabled?: boolean;
  onClick?: VoidFunction;
};

const RecipeCard = (props: Props) => {
  const { isDeleteDisabled, onClick } = props;

  return (
    <SwipableDeleteCard
      isDeleteDisabled={isDeleteDisabled}
      onDelete={() => alert("Delete action")}
      onClick={onClick}
    >
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
export default RecipeCard;
