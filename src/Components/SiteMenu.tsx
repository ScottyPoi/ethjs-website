import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { Repositories } from "@saber2pr/types-github-api";
import { useContext, useEffect, useState } from "react";

interface SiteMenuProps {
    repos: Repositories
}


export default function SiteMenu(props: SiteMenuProps) {
  return (
            <TabList width={'100%'} >
        {props.repos.map((repo) => {
          return (<Tab key={repo.name} width={'100%'}>
            {repo.name}
          </Tab>);
        })}

            </TabList>
  );
}
