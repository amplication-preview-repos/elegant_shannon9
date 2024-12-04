import { TrainingData as TTrainingData } from "../api/trainingData/TrainingData";

export const TRAININGDATA_TITLE_FIELD = "fileName";

export const TrainingDataTitle = (record: TTrainingData): string => {
  return record.fileName?.toString() || String(record.id);
};
