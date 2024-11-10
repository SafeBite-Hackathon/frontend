import { Box, Center, Flex, Text } from "@chakra-ui/react";
import OnboardingPagination from "../../components/OnboardingPagination";
import { useOnboardingStore } from "../../model/useOnboardingStore";
import { useGetTags } from "@/shared/model/getTags";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePatchUserPreferences } from "../../model/patchUserPreferences";

const Step4 = () => {
  const onboardingStore = useOnboardingStore();
  const patchPreference = usePatchUserPreferences();
  const {
    data: tagsResult,
    fetchNextPage,
    isPending,
    isFetching,
  } = useGetTags();
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const handleSelectTag = (tag: number) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = () => {
    patchPreference.mutate({
      allegries: selectedTags,
    });
    onboardingStore.nextStep();
  };

  const displayedTags = tagsResult?.pages.flat();

  return (
    <Box px={4} pt={"100px"} height={"full"} position={"relative"}>
      <Text
        fontSize={24}
        color={"green.600"}
        fontWeight={"bold"}
        lineHeight={"24px"}
        mb={8}
        textAlign={"center"}
      >
        Any allergies?
      </Text>
      <Box maxH={"50vh"} overflowY={"auto"}>
        <Flex flexWrap={"wrap"} gap={2}>
          {displayedTags?.map((tag) => (
            <Center
              bg={selectedTags.includes(tag.id) ? "red.500" : "gray.100"}
              color={selectedTags.includes(tag.id) ? "white" : "gray.800"}
              py={1}
              px={2}
              rounded={"full"}
              onClick={() => handleSelectTag(tag.id)}
              transition={"all 0.2s ease"}
            >
              {tag.name}
            </Center>
          ))}
        </Flex>
        <Center>
          <Button
            onClick={() => {
              fetchNextPage();
            }}
            mt={4}
            colorPalette={"green"}
            loading={isPending || isFetching}
          >
            Load More
          </Button>
        </Center>
      </Box>

      <Box
        position={"absolute"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        left={0}
        right={0}
        bottom={10}
      >
        <Button
          colorPalette={"green"}
          variant={"subtle"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          mb={"20px"}
          onClick={handleSubmit}
        >
          Continue
        </Button>

        <OnboardingPagination />
      </Box>
    </Box>
  );
};

export default Step4;
