import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGoogle,
    url: "gmail: alehkushniarou@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Hellagr",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/aleh-kushniarou-18996a254",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/kushnerow.oleg",
  },
];

const Header = () => {
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

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
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
            <HStack>
              {socials.map((e) => (
                <a href={e.url}>
                  {
                    <FontAwesomeIcon
                      style={{ marginLeft: "5px" }}
                      icon={e.icon}
                      size="2x"
                    />
                  }
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
