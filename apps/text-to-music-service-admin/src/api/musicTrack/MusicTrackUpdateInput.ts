import { PromptWhereUniqueInput } from "../prompt/PromptWhereUniqueInput";

export type MusicTrackUpdateInput = {
  fileUrl?: string | null;
  prompt?: PromptWhereUniqueInput | null;
  title?: string | null;
};
