import { GenerationHistory as TGenerationHistory } from "../api/generationHistory/GenerationHistory";

export const GENERATIONHISTORY_TITLE_FIELD = "resultAudioPath";

export const GenerationHistoryTitle = (record: TGenerationHistory): string => {
  return record.resultAudioPath?.toString() || String(record.id);
};
