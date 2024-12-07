import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GenerationHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="prompt" multiline source="prompt" />
        <TextInput label="resultAudioPath" source="resultAudioPath" />
      </SimpleForm>
    </Create>
  );
};
