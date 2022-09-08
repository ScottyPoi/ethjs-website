// import {
//   Box,
//   Button,
//   HStack,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   SimpleGrid,
//   Text,
//   useDisclosure,
//   VStack,
// } from "@chakra-ui/react";
// // import packages from "../Data/packages.json";
// import Package from "../Components/Package";
// import RepoModal from "../Components/RepoModal";
// import { useContext, useState } from "react";
// import SiteMenu from "../Components/SiteMenu";
// import { ReposContext } from "../App";



export default function Body() {
//   const packages = useContext(ReposContext)
//   const openModal = (pkg: string) => {
//     setPkg(pkg)
//     onOpen()
//   }
//   const [readme, setReadme] = useState("")
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [pkg, setPkg] = useState("")
//   function ReadMe() {
    return (
     <></> );
      }
//       <>
//       <Modal onClose={onClose} isOpen={isOpen} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>{pkg}</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <RepoModal readme={readme} />
//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//       </>
//   const content = [];

//   for (let i = 0; i < 200; i++) {
//     content.push(<Text>content {i}</Text>);
//   }

//   return (
//     <Box
//       border={"1px"}
//       position={"fixed"}
//       top={"10%"}
//       bg={"blue.900"}
//       height={"85%"}
//       width={"100%"}
//       overflowY={"scroll"}
//     >
//       <ReadMe />
//       <HStack>
//         <Box height={'100%'} width={"15%"} border={"1px"}>
//           Menu
//           <SiteMenu />
//         </Box>
//         <VStack>
//       {/* <Package onOpen={openModal} pkg={packages[0]} /> */}
//       <SimpleGrid
//         spacing={1}
//         height={"100%"}
//         bg={"blue.900"}
//         columns={[1, 1, 2, 2, 3, 4]}
//       >
//         {/* {packages.slice(1).map((pkg, idx) => {
//           return <Package onOpen={openModal} key={idx} pkg={pkg} />;
//         })} */}
//         {/* {Object.entries(repositories).map(([name, repo]) => {
//           return (<Package repo={repo} />);
//         })} */}
//         {/* {Object.entries(packageData).map(([name, repo], idx) => {
//           return (<Box>{name}: {repo.stargazers_count} stars</Box>)
//         })} */}
//       </SimpleGrid>

//         </VStack>
//       </HStack>
//     </Box>
//   );
// }
