import { Box, Card, Center, Icon, Text } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { Fragment } from "react/jsx-runtime";
import RecipiesSearch from "../views/RecipiesSearch";
import { useBoolean } from "usehooks-ts";

const PlanMeals = () => {
  const isRecipiSearch = useBoolean(false);

  return (
    <Fragment>
      <RecipiesSearch
        isOpen={isRecipiSearch.value}
        onClose={isRecipiSearch.setFalse}
      />
      <Box spaceY={6}>
        <PlanMealCard
          onClick={() => {
            isRecipiSearch.setTrue();
          }}
          cardTitle="Add breakfast"
        />
        <PlanMealCard
          onClick={() => {
            isRecipiSearch.setTrue();
          }}
          cardTitle="Add lunch"
        />
        <PlanMealCard
          onClick={() => {
            isRecipiSearch.setTrue();
          }}
          cardTitle="Add dinner"
        />
      </Box>
    </Fragment>
  );
};

export default PlanMeals;

const PlanMealCard = (props: { cardTitle: string; onClick: VoidFunction }) => {
  const { cardTitle, onClick } = props;

  return (
    <Card.Root size={"sm"} variant={"elevated"} onClick={onClick}>
      <Card.Body>
        <Center gap={4}>
          <Center w={11} h={11} bg="green.100" rounded={"full"}>
            <Icon fontSize={"28px"} color={"green.600"}>
              <BiPlus />
            </Icon>
          </Center>
          <Text w="111px" fontWeight={"medium"}>
            {cardTitle}
          </Text>
        </Center>
      </Card.Body>
    </Card.Root>
  );
};
