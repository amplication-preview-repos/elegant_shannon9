import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type TrainingDataUpdateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  fileName?: string | null;
  fileUrl?: string | null;
};
