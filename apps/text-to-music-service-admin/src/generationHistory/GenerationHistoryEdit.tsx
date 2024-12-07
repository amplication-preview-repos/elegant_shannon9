import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GenerationHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="prompt" multiline source="prompt" />
        <TextInput label="resultAudioPath" source="resultAudioPath" />
      </SimpleForm>
    </Edit>
  );
};
