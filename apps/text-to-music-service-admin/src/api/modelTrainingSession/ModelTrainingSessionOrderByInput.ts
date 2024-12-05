import { SortOrder } from "../../util/SortOrder";

export type ModelTrainingSessionOrderByInput = {
  createdAt?: SortOrder;
  datasetName?: SortOrder;
  id?: SortOrder;
  progress?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
