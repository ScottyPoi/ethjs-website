import { useClipboard } from "@chakra-ui/hooks";
import { Code, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { useState } from "react";
export default function Mono() {
  const [value, setValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(value);
  const [hovered, setHovered] = useState<number | undefined>(undefined);

  const buildingBlocks = ["block", "blockchain", "devp2p", "trie", "tx"];

  const utils = ["common", "rlp", "util"];

  const common = "common";

  function copy(p: string) {
    setValue(`npm install @ethereumjs/${p}`);
    onCopy();
  }
  return (
    <SimpleGrid alignItems={'center'} columns={2} spacingY={2}>
      <Text bg={"#bee3f8"}>
        Implementations of core structural blockchain building blocks
      </Text>
      <VStack bg={"#bee3f8"} padding={2}>
        {buildingBlocks.map((p, idx) => {
          return (
            <HStack
              key={p}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(undefined)}
              bg={hovered === idx ? "#6c7070" : "#edf2ff"}
              textAlign="start"
            >
              <Code
                bg={hovered === idx ? "#6c7070" : "#edf2ff"}
                height={"100%"}
                width={"30%"}
              >
                {p}
              </Code>
              <Code
                bg={hovered === idx ? "#6c7070" : "#edf2ff"}
                height={"100%"}
                width={"70%"}
                onClick={() => copy(p)}
              >
                https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/
                {p}
              </Code>
            </HStack>
          );
        })}
      </VStack>

      <Text bg="green.100">
        TypeScript implementation of the Ethereum Virtual Machine (EVM) ready to
        be used in Node.js or a browser environment
      </Text>
      <VStack padding={2} bg="green.100">
        <HStack
          onMouseEnter={() => setHovered(5)}
          onMouseLeave={() => setHovered(undefined)}
          bg={hovered === 5 ? "#6c7070" : "#edf2f7"}
          textAlign="start"
        >
          <Code
            bg={hovered === 5 ? "#6c7070" : "#edf2f7"}
            height={"100%"}
            width={"30%"}
          >
            vm
          </Code>
          <Code
            bg={hovered === 5 ? "#6c7070" : "#edf2f7"}
            height={"100%"}
            width={"70%"}
          >
            https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/vm
          </Code>
        </HStack>
        <HStack
          onMouseEnter={() => setHovered(6)}
          onMouseLeave={() => setHovered(undefined)}
          bg={hovered === 6 ? "#6c7070" : "#edf2f7"}
          textAlign="start"
        >
          <Code
            bg={hovered === 6 ? "#6c7070" : "#edf2f7"}
            height={"100%"}
            width={"30%"}
          >
            evm
          </Code>
          <Code
            bg={hovered === 6 ? "#6c7070" : "#edf2f7"}
            height={"100%"}
            width={"70%"}
          >
            https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/evm
          </Code>
        </HStack>
      </VStack>

      <Text
            bg={'red.100'}

      >
        All libraries are bound together by the core Common
        library keeping track of chain specifics and hardfork changes. They are
        complemented by helper packages for data
        encoding/decoding, (byte) conversion, signatures, types and others.
      </Text>
      <VStack padding={2}
      bg={'red.100'}
      >
        {utils.map((p, i) => {
          const idx = i + 7;
          return (
            <HStack
            key={p}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(undefined)}
              bg={hovered === idx ? "#6c7070" : "#edf2f7"}
              padding={0}
              textAlign="start"
            >
              <Code
                bg={hovered === idx ? "#6c7070" : "#edf2f7"}
                height={"100%"}
                width={"30%"}
              >
                {p}
              </Code>
              <Code
                bg={hovered === idx ? "#6c7070" : "#edf2f7"}
                height={"100%"}
                width={"70%"}
                onClick={() => copy(p)}
              >
                https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/
                {p}
              </Code>
            </HStack>
          );
        })}
      </VStack>

      <Text  bg={'purple.100'}>
        Finally, the EthereumJS Execution Client 
        <br/>EthereumJS has been in active development for some time now. It already serves a
        variety of purposes like testing, research (e.g. EIPs) and developer
        tooling to engage with the protocol.
      </Text>
      <VStack padding={2} bg={'purple.100'}>
        <HStack
          onMouseEnter={() => setHovered(11)}
          onMouseLeave={() => setHovered(undefined)}
          bg={hovered === 11 ? "#6c7070" : "#edf2f7"}
          padding={2}
          textAlign="start"
        >
          <Code
            bg={hovered === 11 ? "#6c7070" : "#edf2f7"}
            height={"100%"}
            width={"30%"}
          >
            client
          </Code>
          <Code
            bg={hovered === 11 ? "#6c7070" : "#edf2f7"}
            height={"100%"}
            width={"70%"}
          >
            https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client
          </Code>
        </HStack>
      </VStack>
    </SimpleGrid>
  );
}
