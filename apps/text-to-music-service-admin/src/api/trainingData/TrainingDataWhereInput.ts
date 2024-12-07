import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TrainingDataWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  fileName?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
};
