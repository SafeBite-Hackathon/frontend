import DrawerView from "@/components/DrawerView";
import { Rating } from "@/components/ui/rating";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Image,
  Span,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { useBoolean } from "usehooks-ts";
import IngredientsTab from "./Tabs/Ingredients";
import { CiShoppingCart } from "react-icons/ci";
import Instructions from "./Tabs/Instructions";
import Nutritions from "./Tabs/Nutritions";

interface RecipeDetailsViewProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const RecipeDetailsView: FC<RecipeDetailsViewProps> = ({ isOpen, onClose }) => {
  const isInDom = useBoolean(false);

  useEffect(() => {
    if (isOpen) {
      isInDom.setTrue();
    }
    if (!isInDom.value) return;

    if (!isOpen) {
      setTimeout(() => {
        isInDom.setFalse();
      }, 300);
    }
  }, [isOpen, isInDom]);

  if (!isInDom.value) {
    return null;
  }

  return (
    <Box
      position={"fixed"}
      left={0}
      top={0}
      right={0}
      bottom={0}
      zIndex={999999}
      w={"full"}
      h={"full"}
    >
      <DrawerView isOpen={isOpen}>
        <Box position={"relative"} pb={4}>
          <Box position={"absolute"} top={4} left={4}>
            <IconButton
              backdropFilter="blur(20px)"
              bg={"transparent"}
              blur={"2xl"}
              rounded={"full"}
              onClick={onClose}
            >
              <FaArrowLeft />
            </IconButton>
          </Box>
          <Box position={"absolute"} top={4} right={4}>
            <IconButton
              backdropFilter="blur(20px)"
              bg={"transparent"}
              blur={"2xl"}
              rounded={"full"}
            >
              <LuHeart color="white" />
            </IconButton>
          </Box>

          <Box h={"326px"} mb={4}>
            <Image height={"full"} src="/images/dinner.jpg" />
          </Box>
          <Box px={4}>
            <Heading
              fontSize={24}
              color={"green.800"}
              fontWeight={"bold"}
              fontFamily={"Work Sans"}
              mb={2}
            >
              Creamy Roasted Pumpkin Soup
            </Heading>

            <HStack mb={4}>
              <Rating value={3.5} colorPalette={"yellow"} readOnly />
              <Text color={"gray.400"}>
                <Span fontWeight={"bold"}>3.5</Span> (163)
              </Text>
            </HStack>

            <Box mb={5}>
              <Text fontSize={12} mb={0.5} color={"gray.400"}>
                Description
              </Text>
              <Text>
                Super creamy dairy-free pumpkin soup, with a little help from
                coconut milk or cream. It would be a welcome addition to your
                holiday table.
              </Text>
            </Box>
          </Box>

          <Tabs.Root colorPalette={"green"} defaultValue="tab-1">
            <Tabs.List>
              <Tabs.Trigger value="tab-1" flex={1}>
                <Text flex={1} textAlign={"center"} fontWeight={"bold"}>
                  Ingridients
                </Text>
              </Tabs.Trigger>
              <Tabs.Trigger value="tab-2" flex={1}>
                <Text flex={1} textAlign={"center"} fontWeight={"bold"}>
                  Instructions
                </Text>
              </Tabs.Trigger>
              <Tabs.Trigger value="tab-3" flex={1}>
                <Text flex={1} textAlign={"center"} fontWeight={"bold"}>
                  Nutrition
                </Text>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab-1">
              <IngredientsTab />
            </Tabs.Content>
            <Tabs.Content value="tab-2">
              <Instructions />
            </Tabs.Content>
            <Tabs.Content value="tab-3">
              <Nutritions />
            </Tabs.Content>
          </Tabs.Root>

          <Center>
            <Button colorPalette={"red"}>
              <CiShoppingCart />
              <Text textTransform={"uppercase"}>buy ingredients</Text>
            </Button>
          </Center>
        </Box>
      </DrawerView>
    </Box>
  );
};

export default RecipeDetailsView;
