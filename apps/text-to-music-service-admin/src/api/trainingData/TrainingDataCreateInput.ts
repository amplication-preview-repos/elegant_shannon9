import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type TrainingDataCreateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  fileName?: string | null;
  fileUrl?: string | null;
};
