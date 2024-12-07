import { InputJsonValue } from "../../types";

export type GenerationHistoryUpdateInput = {
  parameters?: InputJsonValue;
  prompt?: string | null;
  resultAudioPath?: string | null;
};
