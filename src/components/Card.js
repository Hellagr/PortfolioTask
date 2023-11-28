import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      style={{ backgroundColor: "whitesmoke", color: "black" }}
    >
      <Image src={imageSrc} borderRadius="lg" />
      <Box style={{ margin: "0.5rem" }}>
        <Heading size="3sm" style={{ paddingBottom: "0.5rem" }}>
          {title}
        </Heading>

        <Text as="abbr" style={{ color: "gray" }} fontSize="md">
          {description}
        </Text>

        <HStack style={{ paddingTop: "0.5rem" }}>
          <Heading size="sm">See more</Heading>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
