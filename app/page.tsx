"use client";
import { Flex, Image } from "@chakra-ui/react";
import styles from "./page.module.css";
import Navbar from "@/app/components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        inset={0}
        pos="fixed"
        minH={"600"}
        bgGradient={"linear(to-r,#000,brand.400)"}
      >
        <Flex
          wrap={"wrap"}
          gap={6}
          pt={"100px"}
          overflowY={"auto"}
          h={"full"}
          bg={"whiteAlpha.400"}
          backdropFilter={"blur(30px)"}
          borderRadius={"lg"}
        >
          <Box maxW={600} pl={10} minW={250} py={4} borderRadius={"md"}>
            <Heading
              py={4}
              className="clip-text"
              bgGradient={"linear(to-r,brand.400,yellow)"}
              bgClip={"text"}
              size={"2xl"}
              fontFamily={"inherit"}
            >
              Bridge, Swap & Mint
            </Heading>
            <Text fontSize={"4xl"} color={"white"}>
              Your NFTs.
            </Text>
            <Text fontSize={"lg"} lineHeight={"tall"} py={4} color={"gray.200"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officia obcaecati dolor placeat dolorum non id nobis adipisci,
              iure, similique iusto porro consectetur distinctio sapiente ad
              alias veniam, iste voluptatum! Dolorum natus sint quisquam.
              Recusandae commodi cumque labore unde in!
            </Text>
          </Box>

          <Box maxW={700} flex={1} pos={"relative"}>
            <Image
              top={"-6"}
              right={"-2"}
              pos={"absolute"}
              maxW={200}
              alt=""
              src={"/images/nft2.png"}
            />
            <Image maxW={600} alt="" src={"/images/nft1.png"} />
            <Image
              bottom={"-7"}
              left={"-8"}
              pos={"absolute"}
              maxW={200}
              alt=""
              src={"/images/nft3.png"}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
