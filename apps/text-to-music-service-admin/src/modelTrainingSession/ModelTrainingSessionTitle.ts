import { ModelTrainingSession as TModelTrainingSession } from "../api/modelTrainingSession/ModelTrainingSession";

export const MODELTRAININGSESSION_TITLE_FIELD = "datasetName";

export const ModelTrainingSessionTitle = (
  record: TModelTrainingSession
): string => {
  return record.datasetName?.toString() || String(record.id);
};
