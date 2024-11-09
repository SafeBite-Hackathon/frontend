import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import image1 from "../../assets/images/marquee/1.jpg";
import image2 from "../../assets/images/marquee/2.jpg";
import image3 from "../../assets/images/marquee/3.jpg";
import image4 from "../../assets/images/marquee/4.jpg";
import image5 from "../../assets/images/marquee/5.jpg";
import image6 from "../../assets/images/marquee/6.jpg";
import image7 from "../../assets/images/marquee/7.jpg";
import image9 from "../../assets/images/marquee/9.jpg";
import image8 from "../../assets/images/marquee/8.jpg";
import { useLocalStorage } from "usehooks-ts";
import { useNavigate } from "react-router-dom";

const Step5 = () => {
  const [value, setValue] = useLocalStorage("isOnboarding", false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(value);
    setValue(true);
    navigate("/");
  };

  return (
    <Box pt={"100px"} height={"full"} position={"relative"}>
      <Text
        fontSize={24}
        color={"green.600"}
        fontWeight={"bold"}
        lineHeight={"24px"}
        mb={8}
        textAlign={"center"}
      >
        You are all set up!
      </Text>
      <Text textAlign={"center"} maxW={"238px"} mx={"auto"} mb={4}></Text>
      <Box mb={"20px"}>
        <Marquee speed={20} style={{ marginBottom: "16px" }}>
          <Image mr={"24px"} src={image1} rounded={"lg"} h={"119px"} />
          <Image mr={"24px"} src={image2} rounded={"lg"} h={"119px"} />
          <Image mr={"24px"} src={image3} rounded={"lg"} h={"119px"} />
        </Marquee>
        <Marquee speed={20} direction="right" style={{ marginBottom: "16px" }}>
          <Image mr={"24px"} src={image4} rounded={"lg"} h={"119px"} />
          <Image mr={"24px"} src={image5} rounded={"lg"} h={"119px"} />
          <Image mr={"24px"} src={image6} rounded={"lg"} h={"119px"} />
        </Marquee>
        <Marquee speed={20}>
          <Image mr={"24px"} src={image7} rounded={"lg"} h={"119px"} />
          <Image mr={"24px"} src={image8} rounded={"lg"} h={"119px"} />
          <Image mr={"24px"} src={image9} rounded={"lg"} h={"119px"} />
        </Marquee>
      </Box>
      <Flex justifyContent={"center"}>
        <Button
          colorPalette={"green"}
          variant={"subtle"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          onClick={handleSubmit}
        >
          Let’s begin
        </Button>
      </Flex>
    </Box>
  );
};

export default Step5;
