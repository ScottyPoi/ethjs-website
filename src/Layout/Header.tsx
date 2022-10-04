import {
  Box,
  HStack,
  IconButton,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";

export default function Header(props: any) {
  const Menu = () => {
    const m = useBreakpointValue(
      {
        base: (
          <HStack justifyContent={"space-evenly"} height="100%">
            <Box fontSize={"sm"}>
              {
                <Text fontWeight={"bold"} color={"whiteAlpha.900"}>
                  EthJS
                </Text>
              }
            </Box>
            <Box>
              <HStack  justifyContent={"space-evenly"}  bgColor={"whiteAlpha.700"}>
                <Input
                  height="100%"
                  padding={0}
                  margin={0}
                  size={"sm"}
                  type="search"
                  placeholder="Search site..."
                  bgColor={"whiteAlpha.800"}
                />
                <IconButton
                  type="submit"
                  height="100%"
                  margin={0}
                  paddingX={0}
                  aria-label="search site"
                  icon={<Search2Icon />}
                />
              </HStack>
            </Box>
            <Box>
              {
                <Text>
                  <IconButton
                    aria-label="Ethereum JS"
                    icon={<HamburgerIcon />}
                    onClick={props.isOpen ? props.onClose : props.onOpen}
                  />
                </Text>
              }
            </Box>
          </HStack>
        ),

        // sm: (
        //   <HStack justifyContent={"space-evenly"} height="100%">
        //     <Box fontSize={"sm"}>
        //       {
        //         <Text fontWeight={"bold"} color={"whiteAlpha.900"}>
        //           Ethereum Javascript
        //         </Text>
        //       }
        //     </Box>
        //     <Box>
        //       <HStack bgColor={"whiteAlpha.700"}>
        //         <Input
        //           height="100%"
        //           padding={0}
        //           margin={0}
        //           size={"sm"}
        //           type="search"
        //           placeholder="Search site..."
        //           bgColor={"whiteAlpha.800"}
        //         />
        //         <IconButton
        //           type="submit"
        //           height="100%"
        //           margin={0}
        //           paddingX={0}
        //           aria-label="search site"
        //           icon={<Search2Icon />}
        //         />
        //       </HStack>
        //     </Box>
        //     <Box>
        //       {
        //         <Text>
        //           <IconButton
        //             aria-label="Ethereum JS"
        //             icon={<HamburgerIcon />}
        //             onClick={props.isOpen ? props.onClose : props.onOpen}
        //           />
        //         </Text>
        //       }
        //     </Box>
        //   </HStack>
        // ),
        sm: (
          <HStack  justifyContent={"space-evenly"}  height="100%">
            <Box fontSize={"sm"}>
              {
                <Text fontWeight={"bold"} color={"whiteAlpha.900"}>
                  EthereumJS
                </Text>
              }
            </Box>
            <Box>{<Text color={"whiteAlpha.900"}>Install</Text>}</Box>
            <Box>{<Text color={"whiteAlpha.900"}>Packages</Text>}</Box>
            <Box>{<Text color={"whiteAlpha.900"}>Documentation</Text>}</Box>
            <Box>
              <HStack bgColor={"whiteAlpha.700"}>
                <Input
                  height="100%"
                  padding={0}
                  margin={0}
                  size={"sm"}
                  type="search"
                  placeholder="Search site..."
                  bgColor={"whiteAlpha.800"}
                />
                <IconButton
                  type="submit"
                  height="100%"
                  margin={0}
                  paddingX={0}
                  aria-label="search site"
                  icon={<Search2Icon />}
                />
              </HStack>
            </Box>
          </HStack>
        ),
        lg: (
          <HStack  justifyContent={"space-around"}  height="100%">
            <Box fontSize={"sm"}>
              {
                <Text fontWeight={"bold"} color={"whiteAlpha.900"}>
                  Ethereum Javascript
                </Text>
              }
            </Box>
            <Box>{<Text color={"whiteAlpha.900"}>Install</Text>}</Box>
            <Box>{<Text color={"whiteAlpha.900"}>Packages</Text>}</Box>
            <Box>{<Text color={"whiteAlpha.900"}>Documentation</Text>}</Box>
            <Box>
              <HStack bgColor={"whiteAlpha.700"}>
                <Input
                  height="100%"
                  padding={0}
                  margin={0}
                  size={"sm"}
                  type="search"
                  placeholder="Search site..."
                  bgColor={"whiteAlpha.800"}
                />
                <IconButton
                  type="submit"
                  height="100%"
                  margin={0}
                  paddingX={0}
                  aria-label="search site"
                  icon={<Search2Icon />}
                />
              </HStack>
            </Box>
          </HStack>
        ),
        // lg: (<Text color={'white'}>LG</Text>),
        // xl: (<Text color={'white'}>XL</Text>),
      },
      {
        fallback: "base",
      }
    );
    return m as JSX.Element;
  };

  const init = async () => {
    return;
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <Box
      position={"fixed"}
      top={0}
      height={"6%"}
      bgColor={"#2c3e50"}
      width={"100%"}
      zIndex={9999}
    >
      {<Menu />}
    </Box>
  );
}
