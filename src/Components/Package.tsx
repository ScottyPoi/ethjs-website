import { CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Table,
  Td,
  Text,
  Th,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Repository, Repositories } from "@saber2pr/types-github-api";

type PackageData = {
  name: string;
  url?: string;
  repo?: string;
  install: string;
  tag: string;
  package: string;
  npmBadge: string;
  npmLink: string;
  issuesBadge: string;
  issuesLink: string;
  actionsBadge: string;
  actionsLink: string;
  coverageBadge: string;
  coverageLink: string;
};

interface PackageProps {
  pkg: PackageData;
}

export default function Package(props: PackageProps) {
  const { pkg } = props;
  const [repo, setRepo] = useState<Repository>();

  const ethereumJSPackages = async () => {
    if (pkg.repo) {
      const api = "https://api.github.com/repos/ethereumjs/" + pkg.repo;
      const response = await fetch(api);
      const jsonData: Repository = await response.json();
      setRepo(jsonData);
    }
  };

  useEffect(() => {
    ethereumJSPackages();
  }, []);

  return (
    <Box border={"1px"} height={"40vh"} width={"100%"} bg={"blue.100"}>
      <VStack>
        <Heading textAlign={"center"}>{pkg.name}</Heading>
        <HStack>
          <Link href={pkg.npmLink}>
            <Image src={pkg.npmBadge} />
          </Link>
          <Link href={pkg.issuesLink}>
            <Image src={pkg.issuesBadge} />
          </Link>
          <Link href={pkg.actionsLink}>
            <Image src={pkg.actionsBadge} />
          </Link>
          <Link href={pkg.coverageLink}>
            <Image src={pkg.coverageBadge} />
          </Link>
        </HStack>
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
            <Tr>
              <Th>
                <Text>Stargazers</Text>
              </Th>
              <Td>
                <Text>{repo.stargazers_count}</Text>
              </Td>
            </Tr>
            <Tr>
              <Th>
                <Text>Forks</Text>
              </Th>
              <Td>
                <Text>{repo.forks_count}</Text>
              </Td>
            </Tr>
            <Tr>
              <Th>
                <Text>Watchers</Text>
              </Th>
              <Td>
                <Text>{repo.watchers_count}</Text>
              </Td>
            </Tr>
          </Table>
        )}
<Box></Box>
        </HStack>
      </VStack>
    </Box>
  );
}
