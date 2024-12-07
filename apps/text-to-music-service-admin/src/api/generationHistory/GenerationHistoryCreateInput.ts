import { InputJsonValue } from "../../types";

export type GenerationHistoryCreateInput = {
  parameters?: InputJsonValue;
  prompt?: string | null;
  resultAudioPath?: string | null;
};
