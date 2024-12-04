import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromptWhereUniqueInput } from "../prompt/PromptWhereUniqueInput";

export type MusicTrackWhereInput = {
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
  prompt?: PromptWhereUniqueInput;
  title?: StringNullableFilter;
};
