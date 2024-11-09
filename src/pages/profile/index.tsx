import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import {
  Box,
  Card,
  Center,
  Grid,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGear } from "react-icons/fa6";
import Settings from "./screens/Settings";
import { Fragment } from "react/jsx-runtime";
import { useBoolean } from "usehooks-ts";

const ProfilePage = () => {
  const isSettingsOpen = useBoolean(false);

  return (
    <Fragment>
      <Settings
        isOpen={isSettingsOpen.value}
        onClose={isSettingsOpen.setFalse}
      />
      <Box px={4} pt={10} pb={0} position={"relative"}>
        <Box position={"absolute"} right={4} top={4}>
          <IconButton
            onClick={isSettingsOpen.setTrue}
            colorPalette={"green"}
            variant={"surface"}
          >
            <FaGear />
          </IconButton>
        </Box>

        <VStack mb={8}>
          <AvatarGroup mb={2}>
            <Avatar colorPalette={"green"} size={"2xl"} />
          </AvatarGroup>

          <Heading>Fabian Levy</Heading>
        </VStack>

        <Card.Root size={"sm"} variant={"elevated"} mb={12}>
          <Card.Header>
            <Heading size={"lg"}>Meal plan progress</Heading>
          </Card.Header>
          <Card.Body>
            <Text mb={2}>7 out of 10 weeks. Great job!</Text>
            <Grid templateColumns={"repeat(5, 1fr)"} gap={4}>
              <Center>
                <Image src="/images/goal-filled.png" />
              </Center>
              <Center>
                <Image src="/images/goal-filled.png" />
              </Center>
              <Center>
                <Image src="/images/goal-filled.png" />
              </Center>
              <Center>
                <Image src="/images/goal-empty.png" />
              </Center>
              <Center>
                <Image src="/images/goal-empty.png" />
              </Center>
              <Center>
                <Image src="/images/goal-empty.png" />
              </Center>
              <Center>
                <Image src="/images/goal-empty.png" />
              </Center>
            </Grid>
          </Card.Body>
        </Card.Root>

        <VStack alignItems={"start"} gap={6}>
          <HStack gap={5}>
            <Image src="/images/goal-icon.png" />
            <Text fontWeight={"semibold"}>Goal</Text>
          </HStack>
          <HStack gap={5}>
            <Image src="/images/diet-type.png" />
            <Text fontWeight={"semibold"}>Diet type</Text>
          </HStack>
          <HStack gap={5}>
            <Image src="/images/food-pref.png" />
            <Text fontWeight={"semibold"}>Food preferences</Text>
          </HStack>
        </VStack>
      </Box>
    </Fragment>
  );
};

export default ProfilePage;
