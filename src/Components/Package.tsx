import { CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Repository } from "@saber2pr/types-github-api";

type PackageData = {
  name: string;
  repo: string;
  lowercase: string;
  titlecase?: string
  url?: string;
  install: string;
  tag: string;
  package: string;
};

interface PackageProps {
  pkg: PackageData;
}

interface IRepository {
  github: string,
  npmBadge: string,
  npmLink: string,
  issuesBadge: string,
  issuesLink: string,
  actionsBadge: string,
  actionsLink: string,
  coverageBadge: string,
  coverageLink: string
}


export default function Package(props: PackageProps) {
  const { pkg } = props;
  const [repo, setRepo] = useState<Repository>();
  const [links, setLinks] = useState<IRepository>()

  const ethereumJSPackages = async () => {
    if (pkg.repo) {
      const title = pkg.repo === 'vm' ? 'VM' : pkg.repo === 'EVM' ? 'EVM' : pkg.repo === 'rlp' ? 'rlp' : pkg.repo === 'statemanager' ? 'statemanager' : pkg.repo.replace(pkg.repo[0], pkg.repo[0].toUpperCase())
      const api = "https://api.github.com/repos/ethereumjs/" + pkg.repo;
      const response = await fetch(api);
      const jsonData: Repository = await response.json();
      setRepo(jsonData);
      const links = {
        github: `https//github.com/ethereumjs/@ethereumjs-${pkg.repo}`,
        npmBadge: `https://img.shields.io/npm/v/@ethereumjs/${pkg.lowercase}.svg`,
        npmLink: `https://www.npmjs.com/package/@ethereumjs/${pkg.lowercase}`,
        issuesBadge: `https://img.shields.io/github/issues/ethereumjs/ethereumjs-monorepo/package:%20${pkg.lowercase}?label=issues`,
        issuesLink: `https://github.com/ethereumjs/ethereumjs-monorepo/issues?q=is%3Aopen+is%3Aissue+label%3A\"package%3A+${pkg.lowercase}\"`,
        actionsBadge: `https://github.com/ethereumjs/ethereumjs-monorepo/workflows/${pkg.titlecase ?? pkg.lowercase}/badge.svg`,
        actionsLink: `https://github.com/ethereumjs/ethereumjs-monorepo/actions?query=workflow%3A%22${pkg.titlecase ?? pkg.lowercase}%22"`,
        coverageBadge: `https://codecov.io/gh/ethereumjs/ethereumjs-monorepo/branch/master/graph/badge.svg?flag=${pkg.lowercase}`,
        coverageLink: `https://codecov.io/gh/ethereumjs/ethereumjs-monorepo/tree/master/packages/${pkg.lowercase}`
      }
      setLinks(links)
    }
  };

  useEffect(() => {
    ethereumJSPackages();
  }, []);

  return (
    <Box border={"1px"} height={"40vh"} width={"100%"} bg={"blue.100"}>
      <VStack>
        <Heading textAlign={"center"}>{pkg.name}</Heading>
          {links && (
        <HStack>
          <Link href={links.npmLink}>
            <Image src={links.npmBadge} />
          </Link>
          <Link href={links.issuesLink}>
            <Image src={links.issuesBadge} />
          </Link>
          <Link href={links.actionsLink}>
            <Image src={links.actionsBadge} />
          </Link>
          <Link href={links.coverageLink}>
            <Image src={links.coverageBadge} />
          </Link>
        </HStack>
          )}
        <Text textAlign={"center"}>{pkg.tag}</Text>
        <Box width={"80%"} border={"1px"} bg={"darkgray"}>
          <HStack>
            <Text
              width={"80%"}
              fontSize={"lg"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              {pkg.install}
            </Text>
            <CopyIcon width={"20%"} />
          </HStack>
        </Box>
        <HStack>
        {repo && (
          <Table size='sm'>
            <Tbody>

            <Tr>
              <Th>
                <Text>Stargazers</Text>
              </Th>
              <Td>
                <Text>{repo.stargazers_count ?? "Unknown"}</Text>
              </Td>
            </Tr>
            <Tr>
              <Th>
                <Text>Forks</Text>
              </Th>
              <Td>
                <Text>{repo.forks_count ?? "Unknown"}</Text>
              </Td>
            </Tr>
            <Tr>
              <Th>
                <Text>Watchers</Text>
              </Th>
              <Td>
                <Text>{repo.watchers_count ?? "Unknown"}</Text>
              </Td>
            </Tr>
</Tbody>
          </Table>
        )}
<Box></Box>
        </HStack>
      </VStack>
      </Box>
      );
}
