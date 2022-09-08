import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Tab,
  TabList,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Repositories, Repository } from "@saber2pr/types-github-api";
import { useEffect, useState } from "react";
import { EthereumJS } from "../App";
import RepoTab from "./RepoTab";

export default function Torsoe(props: any) {
  const [_repos, setRepos] = useState<Repositories[]>([]);
  const [filtered, setFiltered] = useState<Repositories[]>([]);
  // const [repo, setRepo] = useState<number>(0);

  const init = async () => {
    const repos: Repositories = await (await fetch(EthereumJS.repos_url)).json();
    const ultralight: Repository = await (await fetch('https://api.github.com/repos/ethereumjs/ultralight')).json()
    const r = [...repos]
    r.push(ultralight)
    setRepos(sortRepos(r));
    setFiltered(sortRepos(r));
  };

  useEffect(() => {
    init();
  }, []);

  //   const names = repos.map((repo) => repo.name)
  //   const _readmes = useContext(ReadmeContext)
  //   const readmes = Object.fromEntries(names.map((name, idx) => [name, _readmes[idx]]))

  const filter = (filter: string) => {
    filter === ""
      ? setFiltered(_repos)
      : setFiltered(
          sortRepos(
            [..._repos[0], ..._repos[1], ..._repos[2]].filter((n) =>
              n.name.toUpperCase().includes(filter.toUpperCase())
            )
          )
        );
  };

  const sortRepos = (list: Repositories) => {
    let monorepo = [];
    let core = [];
    let other = [];
    for (const repo of list) {
      if (repo.name === "ethereumjs-monorepo") {
        monorepo.push(repo);
      } else if (repo.description!.includes("monorepo") || repo.name!.includes("thereum") || repo.name!.includes("common") ) {
        core.push(repo);
      } else {
        other.push(repo);
      }
    }
    return [monorepo, core, other];
  };

  const menuWidth = 30;
  const bodyWidth = 100 - menuWidth;

  return (
    // <Box width={"100"} border='1px'>
    // <HStack width={"100"} marginTop={'5'} id="StackID"> */}
    <Box height={"85vh"} overflowY={"scroll"} border={"1px"} width={"100%"}>
      <Tabs>
        <TabList>
          <Tab bg={'blue.100'}>Repos</Tab>
        </TabList>
        <Divider />
        <Input
          placeholder="Search"
          type="text"
          bg={'white'}
          onChange={(e) => {
            filter(e.target.value);
          }}
        ></Input>
          <Divider />
        {/* <VStack> */}
        <Button
          padding={0}
          key={"monorepo button"}
          onClick={() => props.setRepo(filtered[0][0])}
          width={"100%"}
          size='xs'
        >
          EthereumJS Monorepo
        </Button>
        <Divider />
        <Button
          padding={0}
          key={"ultralight button"}
          onClick={() => props.setRepo(filtered[2][11])}
          width={"100%"}
          size='xs'
        >
          Ultralight
        </Button>
        <Divider />
        <Button
          padding={0}
          key={"Ethers.io button"}
          // onClick={() => setRepo(idx)}
          width={"100%"}
          size='xs'
        >
          Ethers.io
        </Button>
        <Divider />
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem colSpan={2}>
            <Heading color={'blue.100'} size={"md"} textAlign={"center"}>
              core @ethereumjs packages
            </Heading>
          </GridItem>
          {filtered.slice(1, 2).map((section, i) => {
            return section.map((repo, idx) => {
              return (
                <GridItem key={repo.name}>
                  <Button
                    padding={0}
                    key={idx}
                    onClick={() => props.setRepo(repo)}
                    width={"100%"}
                    size="xs"
                  >
                    <Text fontSize={"small"}>{repo.name}</Text>
                  </Button>
                </GridItem>
              );
            });
          })}
          <GridItem colSpan={2}>
            <Heading  color={'blue.100'} 
             size={"md"} textAlign={"center"}>
              more @ethereumjs packages
            </Heading>
          </GridItem>
          {filtered.slice(2).map((section, i) => {
            return section.map((repo, idx) => {
              return (
                <GridItem key={repo.name}>
                  <Button
                    padding={0}
                    key={idx}
                    // onClick={() => setRepo(idx)}
                    width={"100%"}
                    size="xs"
                  >
                    <Text fontSize={"small"}>{repo.name}</Text>
                  </Button>
                </GridItem>
              );
            });
          })}
        </Grid>
        {/* </VStack> */}
      </Tabs>
    </Box>
    // <Box width={'70%'}>
    //  {filtered[repo] && <RepoTab repo={filtered[repo]} />}
    // </Box>
    //     </HStack> */}
    //   </Box>
  );
}
