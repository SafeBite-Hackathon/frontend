import {
  Box,
  Button,
  Card,
  Center,
  Editable,
  Image,
  Link,
  Span,
  Text,
} from "@chakra-ui/react";

interface Step1Props {
  nextStep: VoidFunction;
}

const Step3 = ({ nextStep }: Step1Props) => {
  return (
    <Box mt={"-50px"} px={4}>
      <Card.Root size={"sm"} variant={"elevated"} mb={8}>
        <Card.Body>
          <Editable.Root
            // value={name}
            // onValueChange={(e) => setName(e.value)}
            placeholder="My meal plan"
            fontWeight={"bold"}
            fontSize={24}
            mb={2}
          >
            <Editable.Preview pl={0} />
            <Editable.Input />
          </Editable.Root>

          <Text fontSize={14} color={"gray.400"}>
            Meals per day
          </Text>
          <Text mb={4}>3 meals</Text>
          <Text fontSize={14} color={"gray.400"}>
            Length
          </Text>
          <Text mb={4}>
            1 week <Span color={"gray.400"}>(12.05 - 18.05)</Span>
          </Text>
          <Text fontSize={14} color={"gray.400"}>
            Total meals
          </Text>
          <Text mb={0}>0 meals</Text>
        </Card.Body>
      </Card.Root>

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
    </Box>
  );
};

export default Step3;
