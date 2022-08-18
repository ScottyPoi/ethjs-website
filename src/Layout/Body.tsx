import { Box, Text } from "@chakra-ui/react";

export default function Body() {
  return (
    <Box
      position={"fixed"}
      top={"10%"}
      bgColor={"green.100"}
      height={"85%"}
      width={"100%"}
    >
      <Text textAlign={"center"}>BODY</Text>
    </Box>
  );
}
