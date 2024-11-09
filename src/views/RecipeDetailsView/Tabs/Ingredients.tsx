import { Box, Center, HStack, Icon, Text } from "@chakra-ui/react";
import { MdOutlineDone } from "react-icons/md";

const IngredientsTab = () => {
  return (
    <Box pb={4}>
      <Box px={4} spaceY={4} mb={9}>
        <HStack gap={4}>
          <Center rounded={"full"} w={6} h={6} bg={"green.100"}>
            <Icon color={"green.600"}>
              <MdOutlineDone />
            </Icon>
          </Center>
          <Text fontWeight={"medium"}>4 tablespoons olive oil, divided</Text>
        </HStack>
        <HStack gap={4}>
          <Center rounded={"full"} w={6} h={6} bg={"green.100"}>
            <Icon color={"green.600"}>
              <MdOutlineDone />
            </Icon>
          </Center>
          <Text fontWeight={"medium"}>4 tablespoons olive oil, divided</Text>
        </HStack>
        <HStack gap={4}>
          <Center rounded={"full"} w={6} h={6} bg={"green.100"}>
            <Icon color={"green.600"}>
              <MdOutlineDone />
            </Icon>
          </Center>
          <Text fontWeight={"medium"}>4 tablespoons olive oil, divided</Text>
        </HStack>
        <HStack gap={4}>
          <Center rounded={"full"} w={6} h={6} bg={"green.100"}>
            <Icon color={"green.600"}>
              <MdOutlineDone />
            </Icon>
          </Center>
          <Text fontWeight={"medium"}>4 tablespoons olive oil, divided</Text>
        </HStack>
        <HStack gap={4}>
          <Center rounded={"full"} w={6} h={6} bg={"green.100"}>
            <Icon color={"green.600"}>
              <MdOutlineDone />
            </Icon>
          </Center>
          <Text fontWeight={"medium"}>4 tablespoons olive oil, divided</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default IngredientsTab;
