import { PromptWhereUniqueInput } from "../prompt/PromptWhereUniqueInput";

export type MusicTrackCreateInput = {
  fileUrl?: string | null;
  prompt?: PromptWhereUniqueInput | null;
  title?: string | null;
};
