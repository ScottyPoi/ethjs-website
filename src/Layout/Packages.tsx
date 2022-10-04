import { useClipboard } from "@chakra-ui/hooks";
import { Code, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { Repositories, Repository } from "@saber2pr/types-github-api";
import { useContext, useEffect, useState } from "react";
import { ReposContext } from "../App";
import RepoBox from "../Components/RepoBox";
import Stats from "../Components/Stats";

export default function Packages() {
  const [value, setValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(value);
  const [hovered, setHovered] = useState<number | undefined>(undefined);
  const monorepo = useContext(ReposContext)
  const packages = [
    "block",
    "blockchain",
    "client",
    "common",
    "devp2p",
    "ethash",
    "evm",
    "rlp",
    "statemanager",
    "trie",
    "tx",
    "util",
    "vm",
  ];
  const [repos, setRepos] = useState<Record<string, Repository>>({});


  

  function copy(p: string) {
    setValue(`npm install @ethereumjs/${p}`);
    onCopy();
  }
  return (
    <SimpleGrid columns={[1, 2]} spacing={2}>
      {packages.map((p, idx) => {
        return (
          <VStack key={p} padding={0}>
            <HStack
              width={"100%"}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(undefined)}
              bg={hovered === idx ? "#6c7070" : "#edf2f7"}
              padding={0}
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
                npm install @ethereumjs/{p}
              </Code>
            </HStack>
          </VStack>
        );
      })}
    </SimpleGrid>
  );
}
