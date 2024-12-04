import { SortOrder } from "../../util/SortOrder";

export type TrainingDataOrderByInput = {
  appUserId?: SortOrder;
  createdAt?: SortOrder;
  fileName?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
