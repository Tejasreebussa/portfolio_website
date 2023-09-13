"use client";
import React from "react";
import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Page = () => {
  return (
    <>
      <Center m={5}>
        <Box width="80vw" height="100%">
          <RevealWrapper className="load-hidden" id="about" delay={300}>
            <Heading className="sub-heading" size="md" my={3}>
              ABOUT
            </Heading>
            <Box textAlign="justify">
              <Heading size="xl" mb={3}>
                👋 Hey there
              </Heading>
              <br />
              <Text>
                I&apos;m <span className="name">Tejasree</span>, a Data
                Analytics Graduate Student from San Jose state
                University,California. Currently working as a CS Data Management
                Intern at Workato. I have a year of professional work experience
                at Accenture as an Application Analyst. I have a strong
                understanding of Data Structures and Algorithms, SQL and Python
                and I&apos;m proficient in developing Object-Oriented
                Applications.I&apos;m passionate about Data Science/Analytics,
                Machine Learning,Deep Learning. I believe in the power of
                programming to help people in improving their lives and solving
                real-world problems.
              </Text>
              <br />
              <Text>
                📫 Open to collaborations and exciting projects, I&apos;m eager
                to connect with fellow developers and tech enthusiasts.
                Let&apos;s build something amazing together!
              </Text>
              <Text>
                Happy coding! 🖥️
                <br />
              </Text>
            </Box>
            {/* <SimpleGrid
              columns={[1, null, 2]}
              gap={6}
              fontSize="1.1rem"
              marginBottom="4rem"
              templateColumns={[null, null, "30% 70%"]}
            >
             
            </SimpleGrid> */}
          </RevealWrapper>
          <br />
          <br />
          <RevealWrapper className="load-hidden" id="interests" delay={600}>
            <Heading className="sub-heading" size="md" my={3}>
              INTERESTS
            </Heading>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
            >
              {interestsData.map((data, index) => {
                return (
                  <InterestsCard
                    interest={data.interest}
                    icon={data.icon}
                    key={index}
                  />
                );
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Page;
