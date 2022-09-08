import { CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Tooltip,
  Tr,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Repository  } from "@saber2pr/types-github-api";


type PackageData = {
  name: string;
  repo: string;
  lowercase: string;
  titlecase?: string;
  url?: string;
  install: string;
  tag: string;
  package: string;
};

interface PackageProps {
  pkg: Repository;
  onOpen: (pkg: string) => void
}

interface IRepository {
  github: string;
  npmBadge: string;
  npmLink: string;
  issuesBadge: string;
  issuesLink: string;
  actionsBadge: string;
  actionsLink: string;
  coverageBadge: string;
  coverageLink: string;
}

export default function Package(props: PackageProps) {
  const { pkg, onOpen } = props;
  const [bg, setBG] = useState("blue.100");
  // const { onCopy } = useClipboard(pkg.install);
  const [repo, setRepo] = useState<Repository>();
  const [links, setLinks] = useState<IRepository>();
  const [blob, setBlob] = useState()

  const ethereumJSPackages = async () => {
    if (pkg) {
      const api = "https://api.github.com/repos/ethereumjs/";
      const response = await fetch(api);
      const jsonData: Repository = await response.json();
      setRepo(jsonData);
    }
  };

  const Readme = async () => {
    const blob = await fetch(repo!.blobs_url)
    const json = await blob.json()
    setBlob(json)
  }

useEffect(() => {
  Readme()
}, [repo])
  useEffect(() => {
    ethereumJSPackages();
  }, []);

  return (
    <Box
      border={"1px"}
      height={"40vh"}
      width={"100%"}
      onMouseEnter={() => {
        setBG("blue.200");
      }}
      onMouseLeave={() => {
        setBG("blue.100");
      }}
      bg={bg}
      onClick={() => props.onOpen(pkg.name)}
    >
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
        {/* <Text textAlign={"center"}>{pkg.tag}</Text>
        <Tooltip label="COPY" fontSize={"md"} placement={"top-end"}>
          <Button width={"80%"} border={"1px"} bg={"darkgray"} onClick={onCopy}>
            {pkg.install}
          </Button>
        </Tooltip> */}
        <HStack>
          {repo && (
            <Text >
              {repo.blobs_url}
            </Text>
            // <Table size="sm">
            //   <Tbody>
            //     <Tr>
            //       <Th>
            //         <Text>Stargazers</Text>
            //       </Th>
            //       <Td>
            //         <Text>{repo.stargazers_count ?? "Unknown"}</Text>
            //       </Td>
            //     </Tr>
            //     <Tr>
            //       <Th>
            //         <Text>Forks</Text>
            //       </Th>
            //       <Td>
            //         <Text>{repo.forks_count ?? "Unknown"}</Text>
            //       </Td>
            //     </Tr>
            //     <Tr>
            //       <Th>
            //         <Text>Watchers</Text>
            //       </Th>
            //       <Td>
            //         <Text>{repo.watchers_count ?? "Unknown"}</Text>
            //       </Td>
            //     </Tr>
            //   </Tbody>
            // </Table>
          )}
          <Box></Box>
        </HStack>
      </VStack>
    </Box>
  );
}
