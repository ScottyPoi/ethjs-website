import { Box } from "@chakra-ui/react";

interface ReadmeProps {
    readme: string
}

export default function RepoModal(props: ReadmeProps) {
    return (<Box>{props.readme}</Box>)
}