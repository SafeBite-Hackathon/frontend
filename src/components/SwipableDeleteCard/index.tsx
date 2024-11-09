import { Box, Card, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface SwipableDeleteProps {
  children: React.ReactNode;
  onDelete: VoidFunction;
  isDeleteDisabled?: boolean;
  onClick?: VoidFunction;
}

const SwipableDeleteCard = ({
  children,
  onDelete,
  isDeleteDisabled,
  onClick,
}: SwipableDeleteProps) => {
  const [showDelete, setShowDelete] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => setShowDelete(true),
    onSwipedLeft: () => setShowDelete(false),
    preventScrollOnSwipe: true,
  });

  const handlers = isDeleteDisabled ? {} : swipeHandlers;

  return (
    <Box onClick={onClick}>
      <Box position={"relative"} {...handlers}>
        {showDelete && !isDeleteDisabled ? (
          <Box
            position="absolute"
            left="0"
            top="0"
            bottom="0"
            width="100px"
            pr={"20px"}
            bg="red.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            borderRadius="md"
            zIndex="1"
          >
            <Text fontWeight="bold" onClick={onDelete}>
              Delete
            </Text>
          </Box>
        ) : null}

        <Card.Root
          variant={"elevated"}
          size={"sm"}
          zIndex={10}
          transform={showDelete ? "translateX(80px)" : "translateX(0)"}
          transition="transform 0.3s ease"
        >
          <Card.Body position={"relative"}>{children}</Card.Body>
        </Card.Root>
      </Box>
    </Box>
  );
};

export default SwipableDeleteCard;
