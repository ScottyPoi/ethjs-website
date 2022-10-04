import {
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import { Repository } from "@saber2pr/types-github-api";
import { useContext, useState } from "react";
import { ReposContext } from "../App";

export default function Stats() {
  const monorepo = useContext(ReposContext);

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
  const watchers: Record<string, number> = {};
  const stargazers: Record<string, number> = {};
  const forks: Record<string, number> = {};
  try {
    for (const pkg of monorepo) {
      watchers[pkg.name] = pkg.watchers_count;
      stargazers[pkg.name] = pkg.stargazers_count;
      forks[pkg.name] = pkg.forks_count;
    }
  } catch (err) {
    console.log((err as any).message);
  }

  const info = { watchers, stargazers, forks };

  return (
    <HStack>
      {Object.entries(info).map(([name, nums], idx) => {
        return (
          <VStack margin={4}>
            <Heading size='md' textAlign={'center'}>{name}</Heading>
            <Grid fontSize={'sm'} templateColumns={"repeat(6, 1fr)"} key={idx}>
              {Object.entries(nums)
                .sort((a, b) => a[1] - b[1])
                .reverse()
                .map(([name, num], idx) => {
                  return (
                    <>
                      <GridItem colSpan={1}>
                        <Text>#{idx + 1}</Text>
                      </GridItem>
                      <GridItem colSpan={4}>
                        <Text>{name}</Text>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <Text>{num}</Text>
                      </GridItem>
                    </>
                  );
                })}
            </Grid>
          </VStack>
        );
      })}
    </HStack>
  );
}
