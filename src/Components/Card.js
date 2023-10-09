import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";      
import FullScreenSection from "./FullScreenSection";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack 
    align= "start"
      spacing={4}
      padding={4}
      borderRadius="md"
      border="1px solid #e2e8f0"
      bg="white" 
      color="black"
      boxShadow="md"
      _hover={{
        boxShadow: "xl",
      }}
    >
      <Image
        src={imageSrc}
        alt={title}
      />
        <Heading as="h3" size="md">
            {title}
        </Heading>
        <Text>{description}</Text>
        <HStack>
            <Text> Read More </Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
        </VStack>
      
      
  ); 
};

export default Card;
