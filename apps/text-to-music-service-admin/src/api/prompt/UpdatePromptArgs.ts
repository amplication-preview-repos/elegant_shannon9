import { PromptWhereUniqueInput } from "./PromptWhereUniqueInput";
import { PromptUpdateInput } from "./PromptUpdateInput";

export type UpdatePromptArgs = {
  where: PromptWhereUniqueInput;
  data: PromptUpdateInput;
};
