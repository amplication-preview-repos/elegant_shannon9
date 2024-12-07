import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AppUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AppUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
