export type ModelTrainingSession = {
  createdAt: Date;
  datasetName: string | null;
  id: string;
  progress: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
