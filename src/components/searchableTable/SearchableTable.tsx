import React, { useState, useMemo, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export interface SearchableTableColumn {
  key: React.Key;
  header: React.ReactNode;
  accessor: (row: any) => React.ReactNode;
}

export interface SearchableTableProps {
  title: string;
  data: any[];
  columns: SearchableTableColumn[];
  searchText: string;
  onSearchTextChange: React.ChangeEventHandler<HTMLInputElement>;
  onPreviousClicked?: () => void;
  onNextClicked?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
  /** Offset number for results */
  offset?: number;
  /** Total number of results */
  total?: number;
}

const SearchableTable: React.FC<SearchableTableProps> = (props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const data = useMemo(() => props.data, [props.data]);
  const columns = useMemo(() => props.columns, [props.columns]);

  const [resultsText, setResultsText] = useState("Loading...");
  useEffect(() => {
    if (!props.offset || !props.total || data.length === 0) {
      setResultsText(`Showing ${data.length} results`);
    } else {
      setResultsText(
        `Showing ${props.offset + 1} to ${props.offset + data.length} of ${
          props.total
        } results`
      );
    }
  }, [data, props.offset, props.total]);

  return (
    <Box bg="bg-surface">
      <Stack spacing="5">
        <Box px={{ base: "4", md: "6" }} pt="5">
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <Heading size="md">{props.title}</Heading>
            <InputGroup maxW="xs">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="muted" boxSize="5" />
              </InputLeftElement>
              <Input
                placeholder="Search"
                value={props.searchText}
                onChange={props.onSearchTextChange}
              />
            </InputGroup>
          </Stack>
        </Box>
        <Box overflowX="auto">
          <Table>
            <Thead>
              <Tr>
                {columns.map((column) => (
                  <Th key={column.key}>{column.header}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row) => (
                <Tr key={row.id}>
                  {columns.map((column) => (
                    <Td>{column.accessor(row)}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box px={{ base: "4", md: "6" }} pb="5">
          <HStack spacing="3" justify="space-between">
            {!isMobile && (
              <Text color="muted" fontSize="sm">
                {resultsText}
              </Text>
            )}
            <ButtonGroup
              spacing="3"
              justifyContent="space-between"
              width={{ base: "full", md: "auto" }}
              variant="secondary"
            >
              <Button
                disabled={!props.hasPrevious}
                onClick={props.onPreviousClicked}
                variant="outline"
              >
                Previous
              </Button>
              <Button
                disabled={!props.hasNext}
                onClick={props.onNextClicked}
                variant="outline"
              >
                Next
              </Button>
            </ButtonGroup>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchableTable;
