import React, {useState, useEffect} from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { motion, useAnimation } from "framer-motion";
import image1 from "../Assests/IMG_3573.JPG";
import image2 from "../Assests/IMG_3853.JPG";


const greeting = "Hi, I am Lovepreet Kaur!";
const bio1 = "A Software developer";
const bio2 = "Specialised in Frontend Development(React)";
const BioPage = () => {
    
    const [showSecondImage, setShowSecondImage] = useState(false);
    const controls = useAnimation();

    const avtarVariants = {
        initial:{opacity:1, scale:1},
        hover: {scale: 1.2 , transition:{duration:0.5}},
        animate:{opacity:1, scale:1.5, transition:{duration:0.5}},
    }
    const handleAvatarClick = () => {
        setShowSecondImage(!showSecondImage);
    }

return(
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
<VStack spacing={4} alignItems="center">
     <motion.div 
     initial="initial"
     animate={showSecondImage? "animate": "hover"}
     variants= {avtarVariants} 
     onClick = {handleAvatarClick}
     whileTap= "hover"
    >
         <Avatar
          size="xl"
        name="Lovepreet Kaur"
        src= {showSecondImage? image2 : image1}
      />
      </motion.div>
      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" color="white">
        {bio1}
      </Heading>
      <Heading as="h3" size="md" color="white">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
)};

export default BioPage;
