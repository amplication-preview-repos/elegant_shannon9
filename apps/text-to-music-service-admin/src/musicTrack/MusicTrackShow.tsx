import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PROMPT_TITLE_FIELD } from "../prompt/PromptTitle";

export const MusicTrackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileUrl" source="fileUrl" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Prompt" source="prompt.id" reference="Prompt">
          <TextField source={PROMPT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
