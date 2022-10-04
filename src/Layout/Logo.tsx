import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { EthereumJS } from "../App";

export function EthjsLink() {
  return <Button>View on Github</Button>;
}

export default function Logo() {
  const LogoComponent = () => {
    const l = useBreakpointValue(
      {
        base: (
          <VStack>
            <Box flexShrink={0}>
              <Image boxSize={"25vh"} src={EthereumJS.avatar_url} />
            </Box>
            <Box textAlign={"center"}>
              <Heading>EthereumJS</Heading>
              <Text>Your Javascript Gateway to Ethereum</Text>
            </Box>
            <HStack>
              <Button>View on Github</Button>
              <Button>Chat on Discord</Button>
            </HStack>
          </VStack>
        ),
        sm: (
          <HStack>
            <Box flexShrink={0}>
              <Image boxSize={"25vh"} src={EthereumJS.avatar_url} />
            </Box>
            <Box textAlign={"center"}>
              <Heading>EthereumJS</Heading>
              <Text>Your Javascript Gateway to Ethereum</Text>
              <VStack>
                <Button>View on Github</Button>
                <Button>Chat on Discord</Button>
              </VStack>
            </Box>
          </HStack>
        ),
        md: (
          <HStack width="100%" justifyContent={"space-evenly"}>
            <Box flexShrink={0}>
              <Image boxSize={"25vh"} src={EthereumJS.avatar_url} />
            </Box>
            <Box textAlign={"center"}>
              <Heading>EthereumJS</Heading>
              <Text>Your Javascript Gateway to Ethereum</Text>
              <HStack>
                <Button>View on Github</Button>
                <Button>Chat on Discord</Button>
              </HStack>
            </Box>
          </HStack>
        ),
        xl: (
          <HStack width="100%" justifyContent={"center"}>
            <Box flexShrink={0}>
              <Image boxSize={"25vh"} src={EthereumJS.avatar_url} />
            </Box>
            <Box textAlign={"center"}>
              <Heading>EthereumJS</Heading>
              <Text>Your Javascript Gateway to Ethereum</Text>
              <HStack>
                <Button>View on Github</Button>
                <Button>Chat on Discord</Button>
              </HStack>
            </Box>
          </HStack>
        ),
      },
      {
        fallback: "base",
      }
    );

    return l as JSX.Element;
  };

  return (
    <Center width={"100%"} bgColor={"gray.400"}>
      <LogoComponent />
    </Center>
  );
}
