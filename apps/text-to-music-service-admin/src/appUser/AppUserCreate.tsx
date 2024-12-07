import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PromptTitle } from "../prompt/PromptTitle";
import { TrainingDataTitle } from "../trainingData/TrainingDataTitle";

export const AppUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <ReferenceArrayInput source="prompts" reference="Prompt">
          <SelectArrayInput
            optionText={PromptTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="trainingDataItems"
          reference="TrainingData"
        >
          <SelectArrayInput
            optionText={TrainingDataTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
