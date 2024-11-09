import {
  Button,
  Card,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { IoIosClose } from "react-icons/io";

const MealPlanShowcase = () => {
  return (
    <Card.Root variant={"elevated"} mb={6}>
      <Card.Body>
        <HStack mb={4} justifyContent={"space-between"}>
          <Heading fontWeight={"bold"} fontSize={16}>
            Increse your chances
          </Heading>

          <IconButton size={"sm"} colorPalette={"red"} variant={"subtle"}>
            <Icon fontSize={"28px"}>
              <IoIosClose />
            </Icon>
          </IconButton>
        </HStack>

        <HStack gap={4} alignItems={"start"} mb={4}>
          <Text flex={1}>
            Our reserach shows, that users, who tend to follow a meal plan, are
            more motivated and achieve their goals without delay.
          </Text>
          <Image src="/images/achievement.png" />
        </HStack>
        <Center>
          <Button colorPalette={"red"} variant={"outline"}>
            <Text textTransform={"uppercase"} fontWeight={"bold"}>
              show plans
            </Text>
          </Button>
        </Center>
      </Card.Body>
    </Card.Root>
  );
};

export default MealPlanShowcase;