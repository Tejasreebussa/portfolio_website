"use client";
import React, { useState } from "react";
import {
  Card,
  ScaleFade,
  Image,
  Text,
  Link,
  Icon,
  Flex,
  List,
  ListItem,
  UnorderedList,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { FaLink, FaGithub } from "react-icons/fa6";

const ProjectCard = (props) => {
  const { title, image, link, source, description } = props.data;
  const [showHover, setShowHover] = useState(false);
  const linkHover = {
    fill: "blueTheme.navLinkActive",
    transition: "all ease-in-out 0.5s",
  };

  return (
    <ScaleFade initialScale={1.2} in={true} reverse={true}>
      <Text
        style={{
          fontSize: "1.5rem",
          marginBottom: "5px",
          textAlign: "center",
          fontFamily: "Righteous",
        }}
      >
        {title}
      </Text>
      <Card
        onMouseEnter={() => setShowHover(true)}
        onMouseLeave={() => setShowHover(false)}
        zIndex={0}
        padding={3}
        boxShadow="0 10px 30px -10px black"
        bgColor={"gray"}
      >
        <UnorderedList>
          {description.map((data, index) => {
            return <ListItem key={index}>{data} </ListItem>;
          })}
        </UnorderedList>

        <Link href={source} target="_blank" mr={1}>
          <HStack>
            <Icon as={FaGithub} _hover={linkHover} />
            <Text color={"black"}>Github Link</Text>
          </HStack>
        </Link>
        {/* <Flex
          height="13rem"
          backgroundColor="hover.gray"
          position="absolute"
          zIndex={showHover ? 1 : 0}
          opacity={showHover ? 1 : 0}
          width="100%"
          transition="all ease-in-out 0.3s"
          alignItems="center"
          justifyContent="center"
          fontSize="2.5rem"
        >
          {link !== null ? (
            <Link href={link} target="_blank" mr={3}>
              <Icon as={FaLink} _hover={linkHover} />
            </Link>
          ) : null}
          <Link href={source} target="_blank" mr={1}>
            <Icon as={FaGithub} _hover={linkHover} />
          </Link>
        </Flex> */}
      </Card>
      <br />
    </ScaleFade>
  );
};

export default ProjectCard;
