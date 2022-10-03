import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box 
    bgColor={"red.100"} 
    width={'100%'} height={"5%"} position={"fixed"} bottom={0}>
      <Text textAlign={"center"}>FOOTER</Text>
    </Box>
  );
}
