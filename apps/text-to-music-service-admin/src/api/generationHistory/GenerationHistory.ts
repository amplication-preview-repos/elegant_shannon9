import { JsonValue } from "type-fest";

export type GenerationHistory = {
  createdAt: Date;
  id: string;
  parameters: JsonValue;
  prompt: string | null;
  resultAudioPath: string | null;
  updatedAt: Date;
};
