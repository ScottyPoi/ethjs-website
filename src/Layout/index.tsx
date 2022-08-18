import { Box, Center, Container, VStack } from "@chakra-ui/react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
      <Box margin={0} position={"relative"} height={"100vh"}>
          <Center>
        <Header />
        <Body />
        <Footer />
    </Center>
      </Box>
  );
}
