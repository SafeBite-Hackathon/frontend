import RecipeCard from "@/shared/ui/RecipeCard";
import { Box, Button, Center, Text } from "@chakra-ui/react";

const ShoppingRecipies = () => {
  return (
    <Box>
      <Box spaceY={4}>
        {Array.from({ length: 3 }).map((_, i) => (
          <RecipeCard key={i} />
        ))}
      </Box>
      <Center mt={6}>
        <Button colorPalette={"red"} size={"lg"}>
          <Text textTransform={"uppercase"} fontWeight={"bold"}>
            Prpoceed to checkout
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

export default ShoppingRecipies;

// const ShoppingRecipeCard = () => {
//   return (
//     <SwipableDeleteCard onDelete={() => alert("Delete action")}>
//       <Image
//         position={"absolute"}
//         right={0}
//         top={0}
//         bottom={0}
//         w={"113px"}
//         h={"full"}
//         roundedRight={"md"}
//         src="/images/dinner.jpg"
//       />

//       <Box position={"absolute"} right={2} bottom={2}>
//         <IconButton
//           variant={"subtle"}
//           backdropFilter="blur(10px)"
//           bg={"transparent"}
//           blur={"2xl"}
//           rounded={"full"}
//           size={"sm"}
//         >
//           <TfiReload color="white" />
//         </IconButton>
//       </Box>

//       <Text color={"gray.400"}>Breakfast</Text>
//       <Text mb={2.5} fontWeight={"medium"}>
//         Smoothie bowl
//       </Text>
//       <HStack color={"gray.400"} gap={2.5}>
//         <HStack>
//           <Icon>
//             <FiClock />
//           </Icon>
//           <Text fontWeight={"medium"}>30 min</Text>
//         </HStack>
//         <HStack>
//           <Icon>
//             <GoFlame />
//           </Icon>

//           <Text fontWeight={"medium"}>450 kcal</Text>
//         </HStack>
//       </HStack>
//     </SwipableDeleteCard>
//   );
// };
