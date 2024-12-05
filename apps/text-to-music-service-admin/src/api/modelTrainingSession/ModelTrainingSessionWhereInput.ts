import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ModelTrainingSessionWhereInput = {
  datasetName?: StringNullableFilter;
  id?: StringFilter;
  progress?: IntNullableFilter;
  status?: "Option1";
};
