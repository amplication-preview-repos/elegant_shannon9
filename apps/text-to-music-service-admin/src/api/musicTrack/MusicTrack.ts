import { Prompt } from "../prompt/Prompt";

export type MusicTrack = {
  createdAt: Date;
  fileUrl: string | null;
  id: string;
  prompt?: Prompt | null;
  title: string | null;
  updatedAt: Date;
};
