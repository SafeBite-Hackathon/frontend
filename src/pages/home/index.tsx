import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import SearchFilter from "./components/SearchFilter";
import Recommendations from "./components/Recommendations";
import MealPlanProgress from "./components/MealPlanProgress";
import MealPlanShowcase from "./components/MealPlanShowcase";

const HomePage = () => {
  return (
    <Box p={4} pb={0}>
      <HStack justifyContent={"space-between"} mb={4}>
        <Box>
          <Text color={"gray.400"}>Welcome,</Text>
          <Text fontSize={"24px"} fontWeight={"bold"}>
            Fabian
          </Text>
        </Box>

        <AvatarGroup>
          <Avatar colorPalette="green" name="Fabian" size={"2xl"} />
        </AvatarGroup>
      </HStack>

      <MealPlanProgress />
      <MealPlanShowcase />

      <Heading fontFamily={"Work Sans"} fontWeight={"bold"} size={"2xl"} mb={4}>
        What do you want to cook today?
      </Heading>

      <SearchFilter />

      <Box my={6}>
        <Recommendations />
      </Box>
      <Box mb={6}>
        <Recommendations />
      </Box>
      <Box>
        <Recommendations />
      </Box>
    </Box>
  );
};

export default HomePage;
