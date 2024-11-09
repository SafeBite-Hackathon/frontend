import DrawerView from "@/components/DrawerView";
import { InputGroup } from "@/components/ui/input-group";
import RecipeCard from "@/shared/ui/RecipeCard";
import { Box, Center, HStack, Icon, Input } from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

interface RecipiesSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecipiesSearch = ({ isOpen, onClose }: RecipiesSearchProps) => {
  return (
    <DrawerView isOpen={isOpen}>
      <Box p={4}>
        <HStack alignItems={"center"} mb={6}>
          <Center
            h={11}
            aspectRatio={"square"}
            bg={"green.100"}
            rounded={"full"}
            onClick={onClose}
          >
            <Icon color={"green.600"}>
              <FaArrowLeftLong />
            </Icon>
          </Center>

          <InputGroup
            flex="1"
            colorPalette={"green"}
            w={"full"}
            startElement={<GoSearch />}
          >
            <Input placeholder="Find recipes" size={"lg"} />
          </InputGroup>
        </HStack>

        <Box spaceY={4}>
          {Array.from({ length: 10 }).map((_, i) => (
            <RecipeCard
              onClick={() => console.log("hello")}
              isDeleteDisabled={true}
              key={i}
            />
          ))}
        </Box>
      </Box>
    </DrawerView>
  );
};

export default RecipiesSearch;
