import { AppUser } from "../appUser/AppUser";

export type TrainingData = {
  appUser?: AppUser | null;
  createdAt: Date;
  fileName: string | null;
  fileUrl: string | null;
  id: string;
  updatedAt: Date;
};
