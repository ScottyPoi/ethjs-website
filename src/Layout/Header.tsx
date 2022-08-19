import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      position={"fixed"}
      top={0}
      height={"10%"}
      bgColor={"blue.300"}
      width={"100%"}
    >
      <HStack height="100%">
        <Box>
          <Image
            boxSize={100}
            src="https://user-images.githubusercontent.com/47108/78779352-d0839500-796a-11ea-9468-fd2a0b3fe1ef.png"
          />
        </Box>
        <Box>
          <Heading >EthereumJS</Heading>
          <Text>Your Javascript Gateway to Ethereum</Text>
        </Box>
      </HStack>
    </Box>
  );
}
