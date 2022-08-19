import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import packages from "../Data/packages.json";
import Package from "../Components/Package";
export default function Body() {
  const content = [];

  for (let i = 0; i < 200; i++) {
    content.push(<Text>content {i}</Text>);
  }

  return (
    <Box
      border={"1px"}
      position={"fixed"}
      top={"10%"}
      bg={"blue.900"}
      height={"85%"}
      width={"100%"}
      overflowY={"scroll"}
    >
      <SimpleGrid
        spacing={1}
        height={"100%"}
        bg={"blue.900"}
        columns={[1, 1, 2, 2, 3, 4]}
      >
        {packages.map((pkg) => {
          return (<Package pkg={pkg} />);
        })}
        {/* {Object.entries(repositories).map(([name, repo]) => {
          return (<Package repo={repo} />);
        })} */}
        {/* {Object.entries(packageData).map(([name, repo], idx) => {
          return (<Box>{name}: {repo.stargazers_count} stars</Box>)
        })} */}
      </SimpleGrid>
    </Box>
  );
}
