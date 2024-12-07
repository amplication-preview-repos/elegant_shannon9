import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromptListRelationFilter } from "../prompt/PromptListRelationFilter";
import { TrainingDataListRelationFilter } from "../trainingData/TrainingDataListRelationFilter";

export type AppUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  prompts?: PromptListRelationFilter;
  trainingDataItems?: TrainingDataListRelationFilter;
  username?: StringNullableFilter;
};
