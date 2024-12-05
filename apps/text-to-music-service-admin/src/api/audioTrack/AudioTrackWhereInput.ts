import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AudioTrackWhereInput = {
  duration?: IntNullableFilter;
  filePath?: StringNullableFilter;
  format?: "Option1";
  id?: StringFilter;
  title?: StringNullableFilter;
};
