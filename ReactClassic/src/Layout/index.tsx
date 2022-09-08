import { useDisclosure, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import MainTabs from "./Tabs";

export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <VStack margin={0} position={"relative"} height={"100vh"}>
        <Header isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <MainTabs isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        {/* <Torsoe /> */}
        {/* <Body /> */}
        <Footer />
      </VStack>
  );
}
