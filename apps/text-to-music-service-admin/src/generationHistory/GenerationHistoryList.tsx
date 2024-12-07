import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GenerationHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GenerationHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="parameters" source="parameters" />
        <TextField label="prompt" source="prompt" />
        <TextField label="resultAudioPath" source="resultAudioPath" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
