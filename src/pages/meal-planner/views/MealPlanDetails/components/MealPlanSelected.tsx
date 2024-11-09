import {
  Box,
  Card,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { GoFlame } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import { useSwipeable } from "react-swipeable";
import { Fragment, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText,
} from "@/components/ui/progress-circle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MealPlanSelected = (props: {
  isSaved?: boolean;
  nextStep?: VoidFunction;
}) => {
  const { isSaved, nextStep } = props;

  return (
    <Box px={4} mt="-50px" overflowX={"hidden"}>
      <Card.Root mb={8} size={"sm"} variant={"elevated"}>
        <Card.Body>
          <Heading mb={5} fontSize={24}>
            Protein power
          </Heading>
          <Box spaceY={4}>
            <Box>
              <Text color={"gray.4000"} fontSize={"sm"} mb={2}>
                Meals per day
              </Text>
              <Text fontWeight={"medium"}>3 meals</Text>
            </Box>
            <Box>
              <Text color={"gray.4000"} fontSize={"sm"} mb={2}>
                Length
              </Text>
              <Text fontWeight={"medium"}>
                1 week <Span color={"gray.400"}>(12.05 - 18.05)</Span>
              </Text>
            </Box>
            <Box>
              <Text color={"gray.4000"} fontSize={"sm"} mb={2}>
                Total meals
              </Text>
              <Text fontWeight={"medium"}>15 meals</Text>
            </Box>
          </Box>
        </Card.Body>
      </Card.Root>
      {isSaved ? (
        <Box pt={2.5}>
          <Text
            maxW={"221px"}
            textAlign={"center"}
            mx={"auto"}
            fontWeight={"medium"}
            mb={8}
          >
            Inredients for 15 recipies will be added to your basket.{" "}
          </Text>
          <Center mb={12}>
            <Image src="/images/basket.png" />
          </Center>
          <Center>
            <Link to={"/shoppingList"}>
              <Button colorPalette={"red"} size={"lg"}>
                <Text textTransform={"uppercase"} fontWeight={"bold"}>
                  Confirm
                </Text>
              </Button>
            </Link>
          </Center>
        </Box>
      ) : (
        <Fragment>
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

          <MealPlanSelectedRecipe />

          <Box>
            <HStack justifyContent={"space-between"} mb={8}>
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

            <HStack
              justifyContent={"space-between"}
              fontWeight={"medium"}
              mb={5}
            >
              <Text color={"gray.400"}>Total:</Text>
              <Text color={"gray.400"}>1,597 kcal</Text>
            </HStack>

            <Center>
              <Button onClick={nextStep} colorPalette={"red"} size={"lg"}>
                <Text fontWeight={"bold"} textTransform={"uppercase"}>
                  Save and Continue
                </Text>
              </Button>
            </Center>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default MealPlanSelected;

const MealPlanSelectedRecipe = () => {
  const [showDelete, setShowDelete] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => setShowDelete(true),
    onSwipedLeft: () => setShowDelete(false),
    preventScrollOnSwipe: true,
  });

  return (
    <Box mb={8}>
      <Box position={"relative"} {...swipeHandlers}>
        {showDelete ? (
          <Box
            position="absolute"
            left="0"
            top="0"
            bottom="0"
            width="100px"
            pr={"20px"}
            bg="red.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            borderRadius="md"
            zIndex="1"
          >
            <Text fontWeight="bold" onClick={() => alert("Delete action")}>
              Delete
            </Text>
          </Box>
        ) : null}
        <Card.Root
          variant={"elevated"}
          size={"sm"}
          zIndex={10}
          transform={showDelete ? "translateX(80px)" : "translateX(0)"}
          transition="transform 0.3s ease"
        >
          <Card.Body position={"relative"}>
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
          </Card.Body>
        </Card.Root>
      </Box>
    </Box>
  );
};
