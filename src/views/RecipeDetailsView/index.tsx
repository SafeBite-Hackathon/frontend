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
  Spinner,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import IngredientsTab from "./Tabs/Ingredients";
import { CiShoppingCart } from "react-icons/ci";
import Instructions from "./Tabs/Instructions";
import Nutritions from "./Tabs/Nutritions";
import { useGetRecipeDetails } from "./model/getRecipeDetails";
import ExpandableText from "@/components/ExpandableText";

interface RecipeDetailsViewProps {
  isOpen: boolean;
  onClose: VoidFunction;
  recipeId?: string | number;
}

const RecipeDetailsView: FC<RecipeDetailsViewProps> = ({
  isOpen,
  onClose,
  recipeId,
}) => {
  const { data, isLoading } = useGetRecipeDetails(recipeId);

  if (!recipeId) {
    return null;
  }

  return (
    <DrawerView isOpen={isOpen}>
      {!isLoading ? (
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
            <Image height={"full"} src={data?.images[0].image} />
          </Box>
          <Box px={4}>
            <Heading
              fontSize={24}
              color={"green.800"}
              fontWeight={"bold"}
              fontFamily={"Work Sans"}
              mb={2}
            >
              {data?.name}
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
                <ExpandableText text={data?.description || ""} />
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
              <Tabs.Trigger value="tab-3" flex={1} disabled>
                <Text flex={1} textAlign={"center"} fontWeight={"bold"}>
                  Nutrition
                </Text>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab-1">
              <IngredientsTab ingredients={data?.ingredient || []} />
            </Tabs.Content>
            <Tabs.Content value="tab-2">
              <Instructions instructions={data?.instructions || []} />
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
      ) : (
        <Center h={"full"}>
          <Spinner size={"lg"} />
        </Center>
      )}
    </DrawerView>
  );
};

export default RecipeDetailsView;
