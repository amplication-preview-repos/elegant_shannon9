import { Prompt } from "../prompt/Prompt";
import { TrainingData } from "../trainingData/TrainingData";

export type AppUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  prompts?: Array<Prompt>;
  trainingDataItems?: Array<TrainingData>;
  updatedAt: Date;
  username: string | null;
};
