import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import SearchFilter from "./components/SearchFilter";
import Recommendations from "./components/Recommendations";
import MealPlanProgress from "./components/MealPlanProgress";
import MealPlanShowcase from "./components/MealPlanShowcase";
import { useGetMe } from "@/shared/model/getMe";
import { Link } from "react-router-dom";

const HomePage = () => {
  const user = useGetMe();

  return (
    <Box p={4} pb={0}>
      <HStack justifyContent={"space-between"} mb={4}>
        <Box>
          <Text color={"gray.400"}>Welcome,</Text>
          <Text fontSize={"24px"} fontWeight={"bold"} truncate maxW={"250px"}>
            {user.data?.username}
          </Text>
        </Box>
        <Link to={"/profile"}>
          <AvatarGroup>
            <Avatar
              colorPalette="green"
              name={user.data?.username}
              size={"2xl"}
            />
          </AvatarGroup>
        </Link>
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
    </Box>
  );
};

export default HomePage;
