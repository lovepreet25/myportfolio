import React, {useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";


const socials = [
  {
    icon: faEnvelope,
    url: "mailto: klovepreet121999@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/lovepreet25",
  },
  {
    icon: faLinkedin,
    url: "www.linkedin.com/in/lovepreet-kaur-269196239",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/22704090/lovepreet-kaur",
  },
];

const Header = () => {
    const [isHidden, setIsHidden] = useState(false);
  
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
    useEffect(() => {
        let prevScrollY = window.scrollY;
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          setIsHidden(currentScrollY > prevScrollY);
          prevScrollY = currentScrollY;
        };
    window.addEventListener("scroll", handleScroll);

    return () => {
         window.removeEventListener("scroll", handleScroll);
       };
    }, []);

  return (
    <Box
      position="fixed"
      top={isHidden ? "-80px" : "0"}
      left={0}
      right={0}
      transitionProperty="top"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack >
              {socials.map(( social, index) => (
                <a key={index} href={social.url} >
                <FontAwesomeIcon icon = {social.icon} size = "2x"/>
                </a>
              ))
              }
              
           </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
    
                <a href="#projects-section" onClick={handleClick("projects")}>
                    Projects
                </a>
                <a href="#contact-section" onClick={handleClick("contact")}>
                    Contact
                </a>
             
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    
  );
};
export default Header;
