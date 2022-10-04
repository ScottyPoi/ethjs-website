import { VStack } from "@chakra-ui/layout";
import { Stat, StatHelpText, StatNumber } from "@chakra-ui/stat";
import { Repository } from "@saber2pr/types-github-api";
import { useEffect, useState } from "react";

export default function RepoBox(props: { repo: Repository }) {
  const repo = props.repo;
  const stats = {
    stargazers: repo.stargazers_count,
    watchers: repo.watchers_count,
    forks: repo.forks_count,
    created: repo.created_at,
  };
  return (
    <VStack>
      {Object.entries(stats).map(([k, v]) => {
        return (
          <Stat>
            <StatNumber>{v}</StatNumber>
            <StatHelpText>{k}</StatHelpText>
          </Stat>
        );
      })}
    </VStack>
  );
}
