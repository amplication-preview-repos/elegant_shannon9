import { SortOrder } from "../../util/SortOrder";

export type AudioTrackOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  filePath?: SortOrder;
  format?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
