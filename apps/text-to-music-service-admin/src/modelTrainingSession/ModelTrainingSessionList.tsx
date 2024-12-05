import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ModelTrainingSessionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ModelTrainingSessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="datasetName" source="datasetName" />
        <TextField label="ID" source="id" />
        <TextField label="progress" source="progress" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
