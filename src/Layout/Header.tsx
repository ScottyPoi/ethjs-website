import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { EthereumJS } from "../App";
import { Timeline } from "react-twitter-widgets";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header(props: any) {
  const init = async () => {
    return;
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <Box
      position={"fixed"}
      top={0}
      height={"10%"}
      bgColor={"blue.300"}
      width={"100%"}
      zIndex={9999}
    >
      <HStack position={"relative"} height="100%">
        <Box>
          <Image boxSize={100} src={EthereumJS.avatar_url} />
        </Box>
        <Box>
          <Heading>EthereumJS</Heading>
          <Text>Your Javascript Gateway to Ethereum</Text>
        </Box>
        <Box position={"absolute"} right={10}>
          {(

            <Text>
            <IconButton
            aria-label="Tweets by Ethereum JS"
            
              icon={<HamburgerIcon />}
              onClick={props.isOpen ? props.onClose : props.onOpen}
            />

              Tweets by EFJavascript
            </Text>
          )}
        </Box>
      </HStack>
    </Box>
  );
}
