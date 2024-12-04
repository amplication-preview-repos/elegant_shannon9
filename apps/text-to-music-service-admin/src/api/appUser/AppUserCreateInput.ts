import { PromptCreateNestedManyWithoutAppUsersInput } from "./PromptCreateNestedManyWithoutAppUsersInput";
import { TrainingDataCreateNestedManyWithoutAppUsersInput } from "./TrainingDataCreateNestedManyWithoutAppUsersInput";

export type AppUserCreateInput = {
  email?: string | null;
  password?: string | null;
  prompts?: PromptCreateNestedManyWithoutAppUsersInput;
  trainingDataItems?: TrainingDataCreateNestedManyWithoutAppUsersInput;
  username?: string | null;
};
