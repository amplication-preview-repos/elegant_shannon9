import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROMPT_TITLE_FIELD } from "../prompt/PromptTitle";

export const MusicTrackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MusicTracks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileUrl" source="fileUrl" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Prompt" source="prompt.id" reference="Prompt">
          <TextField source={PROMPT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
