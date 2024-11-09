import { InputGroup } from "@/components/ui/input-group";
import { Fragment } from "react/jsx-runtime";
import { GoSearch } from "react-icons/go";
import { Box, Center, HStack, Image, Input, Text } from "@chakra-ui/react";

const SearchFilter = () => {
  return (
    <Fragment>
      <InputGroup
        flex="1"
        colorPalette={"green"}
        w={"full"}
        startElement={<GoSearch />}
        mb={6}
      >
        <Input placeholder="Find recipes" size={"lg"} />
      </InputGroup>

      <HStack overflowX={"auto"} gap={4}>
        <Center rounded={"lg"} px={6} h={12} position={"relative"}>
          <Image
            rounded={"lg"}
            position={"absolute"}
            w="full"
            h="full"
            left={0}
            top={0}
            src="/images/dinner.jpg"
            opacity={1}
            // opacity={0.2}
          />
          <Box
            bg={"green.500"}
            position={"absolute"}
            left={0}
            right={0}
            top={0}
            bottom={0}
            rounded={"lg"}
            zIndex={10}
            opacity={".75"}
          />
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            color={"white"}
            // color={"green.600"}
            position={"relative"}
            zIndex={10}
          >
            dinner
          </Text>
        </Center>
        <Center rounded={"lg"} px={6} h={12} position={"relative"}>
          <Image
            rounded={"lg"}
            position={"absolute"}
            w="full"
            h="full"
            left={0}
            top={0}
            src="/images/launch.jpg"
            opacity={0.2}
          />
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            color={"green.600"}
            position={"relative"}
            zIndex={10}
          >
            lunch
          </Text>
        </Center>
        <Center rounded={"lg"} px={6} h={12} position={"relative"}>
          <Image
            rounded={"lg"}
            position={"absolute"}
            w="full"
            h="full"
            left={0}
            top={0}
            src="/images/breakfast.jpg"
            opacity={0.2}
          />
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            color={"green.600"}
            position={"relative"}
            zIndex={10}
          >
            breakfast
          </Text>
        </Center>
        <Center rounded={"lg"} px={6} h={12} position={"relative"}>
          <Image
            rounded={"lg"}
            position={"absolute"}
            w="full"
            h="full"
            left={0}
            top={0}
            src="/images/supper.jpg"
            opacity={0.2}
          />
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            color={"green.600"}
            position={"relative"}
            zIndex={10}
          >
            brunch
          </Text>
        </Center>
      </HStack>
    </Fragment>
  );
};

export default SearchFilter;
