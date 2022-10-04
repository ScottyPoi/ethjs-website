import {
  Box,
  Code,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Timeline } from "react-twitter-widgets";
import Wiki from "../Components/Wiki";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import Packages from "./Packages";
import MainTabs from "./Tabs";
import remarkGithub from "remark-github";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import Mono from "./Mono";
import Stats from "../Components/Stats";

export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const _box = useBreakpointValue({
    base: { height: "20vh", width: "95%" },
    lg: { height: "20vh", width: "94%" },
  });
  return (
    <VStack margin={0} position={"relative"} height={"100vh"}>
      <Header isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <VStack height={"94%"} paddingY={10} width="100%" overflowY={"scroll"}>
        <Logo />
        {useBreakpointValue({
          base: (
            <VStack>
              <Wiki page={"ethereum"} />
              <Wiki page={"ethereumjs"} />
            </VStack>
          ),
          lg: (
            <HStack justifyContent={"space-evenly"}>
              <Wiki page={"ethereum"} />
              <Wiki page={"ethereumjs"} />
            </HStack>
          ),
        })}
        <Box
          border={"1px"}
          width={_box?.width}
          height={_box?.height}
          overflowY={"scroll"}
          flexShrink={0}
        >
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "EFJavaScript",
            }}
          />
        </Box>
        <Box>
          <Heading>EthereumJS Packages</Heading>
        </Box>
        <VStack>
        <SimpleGrid spacing={8} columns={[1, 1, 1, 2]}>
          <Box>
            <Text fontSize={"xx-large"} textAlign={"center"}>
              Install via npm
            </Text>
            <Packages />
            <Stats />
          </Box>
          <Box textAlign={"center"}>
            <Text fontSize={"xx-large"} textAlign={"center"}>
              EthereumJS-Monorepo
            </Text>
            <Text wordBreak={"break-all"}>
              This repository holds various protocol building blocks of the
              Ethereum blockchain execution layer
            </Text>
            <Code textAlign={"center"} width="100%">
              git clone https://github.com/ethereumjs/ethereumjs-monorepo.git
            </Code>

            <Mono />
            {/* <Text>
              This repository holds various protocol building blocks of the
              Ethereum blockchain execution layer and is managed by the Ethereum
              Foundation JavaScript team. There is a TypeScript implementation
              of the Ethereum Virtual Machine (EVM) ready to be used in Node.js
              or a browser environment, implementations of core structural
              blockchain building blocks like an Ethereum Tx, Block or
              Blockchain as well as a Trie (Merkle Patricia Tree) and devp2p
              (execution networking layer) implementation. <br/>All libraries are
              bound together by the core Common library keeping track of chain
              specifics and hardfork changes. They are complemented by helper
              packages like RLP for data encoding/decoding or Util, providing
              helper functionalities like (byte) conversion, signatures, types
              and others. <br/> Finally, the EthereumJS Execution Client (EthereumJS)
              has been in active development for some time now. It already
              serves a variety of purposes like testing, research (e.g. EIPs)
              and developer tooling to engage with the protocol.<br/> Also to note:
              on the Ethereum Consensus side, the ChainSafe Lodestar repository
              complements this repository with an Ethereum Consensus Client
              implementation as well as various protocol implementations (like
              an SSZ library) developed in the context of Ethereum Consensus
              layer evolution.
            </Text> */}
          </Box>
        </SimpleGrid>
                </VStack>
      </VStack>
      {/* <MainTabs isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
      {/* <Torsoe /> */}
      {/* <Body /> */}
      <Footer />
    </VStack>
  );
}
