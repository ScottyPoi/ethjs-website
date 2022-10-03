import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  border,
  Box,
  Center,
  Heading,
  Button,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";
import { Repository } from "@saber2pr/types-github-api";
import { relative } from "path";
import { RefObject, useRef, useState } from "react";
import { Timeline } from "react-twitter-widgets";
import RepoTab from "./RepoTab";

import Torsoe from "./Torsoe";

export default function MainTabs(props: any) {
  const { isOpen, onOpen, onClose } = props;
  const btnRef = useRef<HTMLButtonElement>(null);
  const tabs = ["Home", "Repos", "Projects", "Issues", "Testimonials"];
  const panels = [];
  const [repo, setRepo] = useState<Repository>();

  return (
    <Box
      position={"relative"}
      top={20}
      border="1px"
      width={"100%"}
      height={"90%"}
      bg={"blue.900"}
    >
      <Tabs height="100%" variant={"enclosed-colored"}>
        <TabPanels position={"absolute"} height="100%">
          {tabs.map((tab) => {
            return tab === "Repos" ? (
              <TabPanel key={tab} padding={0} width={"100%"} height={"90%"}>
                <Torsoe setReop={setRepo} />
              </TabPanel>
            ) : tab === "Home" ? (
              <TabPanel
              key={tab}
                padding={0}
                top={0}
                position={"relative"}
                width="100%"
                height="50%"
              >
                <HStack paddingX={0}>
                  <Box width={"50%"} top={0} position={"absolute"}>
                    <Torsoe setRepo={setRepo} />
                  </Box>
                  <Box position={'absolute'} top={0} right={0} id={"0056"} width="50%">
                    {repo ? (
                      <Box 
                      
                      width={"100%"} paddingTop={'10%'}
                      bgColor={'blue.100'}
                      >
                        <RepoTab repo={repo} />
                      </Box>
                    ) : (
                      <VStack
                      key={tab}>
                        <Box
                          overflowY={"scroll"}
                          height={"50vh"}
                          width={"100%"}
                          border="1px"
                        >
                          <Timeline
                            dataSource={{
                              sourceType: "profile",
                              screenName: "EFJavaScript",
                            }}
                          />
                        </Box>
                        <Drawer
                          isOpen={isOpen}
                          placement="right"
                          onClose={onClose}
                        >
                          <DrawerOverlay />
                          <DrawerContent paddingY={"12%"}>
                            <DrawerBody
                              overflowY={"scroll"}
                              height={"50vh"}
                              width={"100%"}
                              border="1px"
                            >
                              <Timeline
                                dataSource={{
                                  sourceType: "profile",
                                  screenName: "EFJavaScript",
                                }}
                              />
                            </DrawerBody>

                            <DrawerFooter>
                              {/* <DrawerCloseButton /> */}
                              <Button
                                variant="outline"
                                mr={3}
                                onClick={onClose}
                              >
                                Close
                              </Button>
                            </DrawerFooter>
                          </DrawerContent>
                        </Drawer>

                        <Box height={"20vh"} width={"100%"}>
                          Stuff
                        </Box>
                      </VStack>
                    )}
                  </Box>
                </HStack>
              </TabPanel>
            ) : (
              <TabPanel key={tab} width={"100%"} height={"90%"}>
                <Center>
                  <Heading fontWeight={"bold"}>{tab.toUpperCase()}</Heading>
                </Center>
              </TabPanel>
            );
          })}
        </TabPanels>
        <TabList position={"fixed"} width={"100%"} bottom={10}>
          {tabs.map((tab) => {
            return (
              <Tab key={tab} width={"100%"} height={"10%"}>
                {tab.toLowerCase()}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </Box>
  );
}
