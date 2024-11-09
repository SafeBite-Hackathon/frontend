import { Heading, HStack } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import MealPlanCard from "./MealPlanCard";

const BrowseAll = () => {
  return (
    <Fragment>
      <Heading
        fontWeight={"medium"}
        fontSize={24}
        fontFamily={"Work Sans"}
        mb={4}
      >
        Browse more options
      </Heading>

      <HStack overflowX={"auto"} overflowY={"visible"} p={2}>
        {Array.from({ length: 4 }).map((_, index) => (
          <MealPlanCard key={index} />
        ))}
      </HStack>
    </Fragment>
  );
};

export default BrowseAll;
