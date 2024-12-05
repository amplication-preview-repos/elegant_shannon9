import { ModelTrainingSessionWhereInput } from "./ModelTrainingSessionWhereInput";
import { ModelTrainingSessionOrderByInput } from "./ModelTrainingSessionOrderByInput";

export type ModelTrainingSessionFindManyArgs = {
  where?: ModelTrainingSessionWhereInput;
  orderBy?: Array<ModelTrainingSessionOrderByInput>;
  skip?: number;
  take?: number;
};
