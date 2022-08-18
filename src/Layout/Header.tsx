import { Box, Container, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      position={"fixed"}
      top={0}
      height={"10%"}
      bgColor={"blue.100"}
      width={"100%"}
    >
      <Text textAlign={"center"}>HEAD</Text>
    </Box>
  );
}
