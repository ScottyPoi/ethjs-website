import { Box, Text } from "@chakra-ui/react";

export default function Body() {
  const content = [];

  for (let i = 0; i < 200; i++) {
    content.push(<Text>content {i}</Text>);
  }

  return (
    <Box
    border={'1px'}
      position={"fixed"}
      top={"10%"}
      bgColor={"green.100"}
      height={"85%"}
      width={"100%"}
      overflowY={'scroll'}
    >
      <Text textAlign={"center"}>BODY</Text>
      {content.map((v) => {
        return <Box textAlign={'center'} height={"10%"}>{v}</Box>;
      })}
    </Box>
  );
}
