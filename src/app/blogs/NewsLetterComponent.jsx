"use client";
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Flex,
  Box,
  HStack,
} from "@chakra-ui/react";

const WorkCard = (props) => {
  const { name, designation, location, duration, grade, companyImg } =
    props.data;
  return (
    <>
      <Card
        my={3}
        transition="all .3s ease-in-out"
        backgroundColor="blueTheme.card"
        _hover={{ transform: "scale(0.99)" }}
        width="60vw"
        boxShadow="0 10px 30px -15px blueTheme.navShadow"
        justifyContent="center"
      >
        <CardBody>
          <Flex
            flexDirection={["column", "column", "row"]}
            // justifyContent="center"
            // alignItems="center"
          >
            <Image
              objectFit="cover"
              src={`/images/${companyImg}`}
              alt="Company Logo"
              marginRight="1rem"
              height={["15rem", "15rem", "13rem"]}
              width={["15rem", "15rem", "13rem"]}
              margin={["2rem auto", "1rem", "auto 1rem"]}
              backgroundColor="white"
              display={["none", "unset", "unset"]}
            />
            <Box>
              <HStack>
                <Heading fontSize="1.5rem">{name}</Heading>
                <Text size="xs" my={2} fontStyle="italic">
                  {location}
                </Text>
              </HStack>
              <Heading size="sm" my={2}>
                {duration}
              </Heading>
              <Text size="xs" my={2} fontStyle="italic">
                {designation}
              </Text>
              <HStack>
                <Heading size="sm" my={2}>
                  Grade :
                </Heading>
                <Text size="xs" my={2} fontStyle="italic">
                  {grade}
                </Text>
              </HStack>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default WorkCard;
