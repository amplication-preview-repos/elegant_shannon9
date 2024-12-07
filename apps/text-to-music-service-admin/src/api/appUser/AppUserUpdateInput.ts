import { PromptUpdateManyWithoutAppUsersInput } from "./PromptUpdateManyWithoutAppUsersInput";
import { TrainingDataUpdateManyWithoutAppUsersInput } from "./TrainingDataUpdateManyWithoutAppUsersInput";

export type AppUserUpdateInput = {
  email?: string | null;
  password?: string | null;
  prompts?: PromptUpdateManyWithoutAppUsersInput;
  trainingDataItems?: TrainingDataUpdateManyWithoutAppUsersInput;
  username?: string | null;
};
