import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PromptTitle } from "../prompt/PromptTitle";

export const MusicTrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileUrl" source="fileUrl" />
        <ReferenceInput source="prompt.id" reference="Prompt" label="Prompt">
          <SelectInput optionText={PromptTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
