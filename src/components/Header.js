import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const [varPoint, setVarPoint] = useState("translateY(0px)");

  let lastScrollTop = document.documentElement.scrollTop;

  function handleScroll() {
    const scrollTopPosition =
      window.scrollY || document.documentElement.scrollTop;
    if (scrollTopPosition > lastScrollTop) {
      setVarPoint("translateY(0px)");
    } else if (scrollTopPosition < lastScrollTop) {
      setVarPoint("translateY(-200px)");
    }
    lastScrollTop = scrollTopPosition;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }),
    [varPoint];

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={varPoint}
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
              {socials.map((e, index) => (
                <a href={e.url} key={index}>
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
              <a href="/#projects" onClick={handleClick("projects")}>
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
