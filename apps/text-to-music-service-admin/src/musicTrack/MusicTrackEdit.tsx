import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PromptTitle } from "../prompt/PromptTitle";

export const MusicTrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fileUrl" source="fileUrl" />
        <ReferenceInput source="prompt.id" reference="Prompt" label="Prompt">
          <SelectInput optionText={PromptTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
