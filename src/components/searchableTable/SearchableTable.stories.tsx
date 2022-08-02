import React, { useState } from "react";
import { ChakraProvider, Link, LinkOverlay } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchableTable, { SearchableTableColumn } from "./SearchableTable";

export default {
  title: "Components/Searchable Table",
  component: SearchableTable,
} as ComponentMeta<typeof SearchableTable>;

const data = [
  {
    id: 0,
    fromUnit: "inches",
    toUnit: "millimetres (mm)",
    factor: 25.4,
  },
  {
    id: 1,
    fromUnit: "feet",
    toUnit: "centimetres (cm)",
    factor: 30.48,
  },
  {
    id: 2,
    fromUnit: "yards",
    toUnit: "metres (m)",
    factor: 0.91444,
  },
];

const columns: SearchableTableColumn[] = [
  {
    key: 0,
    header: "To convert",
    accessor: (row) => <LinkOverlay href="/">{row["fromUnit"]}</LinkOverlay>,
  },
  {
    key: 1,
    header: "Into",
    accessor: (row) => row["toUnit"],
  },
  {
    key: 2,
    header: "Multiply by",
    accessor: (row) => row["factor"],
  },
];

const Template: ComponentStory<typeof SearchableTable> = (args) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchText(event.target.value);
  };

  return (
    <ChakraProvider>
      <SearchableTable
        title="Example Table"
        data={data}
        columns={columns}
        searchText={searchText}
        onSearchTextChange={handleSearchChange}
      />
    </ChakraProvider>
  );
};

export const Original = Template.bind({});
