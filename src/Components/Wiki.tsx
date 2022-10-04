import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { EthereumJS } from "../App";


export type pages = 'ethereum' | 'ethereumjs'

export default function Wiki(props: { page: pages }) {
    const page = props.page
  const content: Record<pages, Record<string, string>> = {
    ethereum: {
      heading: "Ethereum",
      body: "Ethereum is a decentralized platform that runs smart contracts, applications that run exactly as programmed without possibility of downtime, censorship, fraud or third party interference.",
      link: "The Ethereum Foundation",
      href: "https://ethereum.org",
      img: "https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/13c43/eth-diamond-purple.png"
    },
    ethereumjs: {
      heading: "Ethereum Javascript",
      body: "Typescript libraries that make Ethereum protocol stack digestable and explorable for the the thousand of dApp and dApp frontend developers out there looking to dive deeper into the stack in a familiar language",
      link: "",
      href: "",
      img: EthereumJS.avatar_url,
    },
  };

  const link = {
    ethereum: (
        <Text>
        Visit <Link  textDecoration={'underline'}  href={content[page].href}>{content[page].link}</Link>{" "}
        to learn more!
      </Text>
    ),
    ethereumjs: (
        <Text>
        <Link textDecoration={'underline'}  href={content[page].href}>Install</Link>{" "}
        now to begin exploring
      </Text>
    )
  }

  return (
    <Box
    height="100%" 
      border={"1px"}
      padding={2}
      width={useBreakpointValue({
        base: "95%",
        lg: "45%",
      })}
    >
      <HStack height="100%" justifyContent={"space-evenly"}>
        <VStack alignItems={"start"}>
          <Heading>{content[page].heading}</Heading>
          <Text>
            {content[page].body}
          </Text>
            {link[page]}
        </VStack>
        <Image
          height={"20vh"}
          fallbackSrc={content[page].img}
        />
        
      </HStack>
    </Box>
  );
}
