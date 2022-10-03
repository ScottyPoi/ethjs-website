import {
  Box,
  Center,
  Heading,
  Link,
  LinkBox,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { Content, Contents, Repository } from "@saber2pr/types-github-api";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownIt from "markdown-it";
import monorepo from "../Data/monorepo.json";
import remarkGithub from "remark-github";
import gfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkMermaid from 'remark-mermaid-plugin'

interface RepoTabProps {
  repo: Repository;
}

const _monorepo: { old: string[]; mono: string[] } = monorepo;
export default function RepoTab(props: RepoTabProps) {
  const [contents, setContent] = useState<string>("");

  const init = async () => {
    console.log(Object.keys(_monorepo));
    if (monorepo["old"].includes(props.repo.name)) {
      const readme = await fetch(
        `https://raw.githubusercontent.com/ethereumjs/ethereumjs-monorepo/master/packages/${
          monorepo["mono"][monorepo["old"].indexOf(props.repo.name)]
        }/README.md`
      );
      setContent(await readme.text());
    } else {
      const contents = (await (
        await fetch(`https://raw.githubusercontent.com/ethereumjs/${props.repo.name}/master/README.md`)
      ).text()) ;
      if (contents) {
          console.log(contents)
        // const readme = await fetch(contents[0].url);
        setContent(contents);
      }
    }
  };
  useEffect(() => {
    init();
  }, [props.repo]);

  const md = new MarkdownIt()

  return (
      <VStack
      >
        <Heading>
          {monorepo.old.includes(props.repo.name)
            ? monorepo["@"][monorepo["old"].indexOf(props.repo.name)]
            : props.repo.name}
        </Heading>
        <Text width={"80%"} textAlign={"center"}>
          est. {new Date(props.repo.created_at).toUTCString()}
        </Text>
        <Text width={"80%"} textAlign={"center"}>
          {props.repo.description?.toUpperCase()}
        </Text>
        <LinkBox>
          <Link>{props.repo.homepage}</Link>
        </LinkBox>
        <Table>
          <Thead>
            <Tr>
              <Th>Forks</Th>
              <Th>Stargazers</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{props.repo.forks_count}</Td>
              <Td>{props.repo.stargazers_count}</Td>
            </Tr>
          </Tbody>
        </Table>
        <Tabs width='100%'>
                <TabList>
                  <Tab>README.md</Tab>
                  <Tab>Sandbox</Tab>
                </TabList>
          <TabPanels>
            <TabPanel>
        <Box
          border="1px"
          // width={"80%"}
          height={"50vh"}
          overflowY={"scroll"}
          overflowX={"scroll"}
          bg={"gray.800"}
          color={"blue.100"}
          >
            {/* {contents && md.render(contents)} */}
          {/* {contents && (

            <ReactMarkdown

            remarkPlugins={[
              gfm,
              [remarkGithub, { repository: props.repo.url }],
              remarkMermaid
            ]}
            rehypePlugins={[rehypeHighlight]}
              >
              {contents}
            </ReactMarkdown>
          )} */}
        </Box>
            </TabPanel>
            <Box
                      border="1px"
                      width={"100"}
                      height={"50vh"}
                      overflowY={"scroll"}
                      overflowX={"scroll"}
                      bg={"gray.800"}
                      color={"blue.100"}
            >
              <Text width="100">

              SAND
              </Text>
            </Box>
          </TabPanels>
        </Tabs>
      </VStack>
  );
}
