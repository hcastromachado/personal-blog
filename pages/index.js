import Head from "next/head";
import Container from "../components/Container";
import { Text, useColorMode, Heading, Flex, Stack } from "@chakra-ui/react";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>Home - Henrique C. Machado</Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={10}>Hi, I'm Henrique</Heading>
          <Text color={colorSecondary[colorMode]}>
            This is my official website and blog. Here, you can see all the
            projects I'm building and contribuiting.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
