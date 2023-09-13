"use client";
import React from "react";
import WorkCard from "./NewsLetterComponent";
import { Heading, SimpleGrid, Center, Box } from "@chakra-ui/react";
import { educationData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Blogs = () => {
  return (
    <>
      <Center>
        <Box width={["80vw", "80vw", "79vw"]} height="100%">
          <Heading className="sub-heading" size="md" my={3}>
            EDUCATION
          </Heading>
          <RevealWrapper className="load-hidden" delay={300}>
            <SimpleGrid>
              {educationData.map((data, index) => {
                return <WorkCard {...{ data }} key={index} />;
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Blogs;
