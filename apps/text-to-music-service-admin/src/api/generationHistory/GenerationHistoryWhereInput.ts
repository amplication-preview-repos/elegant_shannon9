import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GenerationHistoryWhereInput = {
  id?: StringFilter;
  parameters?: JsonFilter;
  prompt?: StringNullableFilter;
  resultAudioPath?: StringNullableFilter;
};
