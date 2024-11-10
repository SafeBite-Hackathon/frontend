import { FC, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

type Props = {
  text: string;
  maxLength?: number;
};

const ExpandableText: FC<Props> = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  // Show the truncated text if not expanded and text is longer than maxLength
  const textToShow = isExpanded ? text : text.slice(0, maxLength);

  return (
    <Box>
      <Text>
        {textToShow}
        {text.length > maxLength && !isExpanded && "..."}
      </Text>
      {text.length > maxLength && (
        <Button
          size="xs"
          onClick={toggleExpansion}
          mt={2}
          variant="ghost"
          colorScheme="blue"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </Box>
  );
};

export default ExpandableText;
