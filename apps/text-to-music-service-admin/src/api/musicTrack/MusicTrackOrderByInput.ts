import { SortOrder } from "../../util/SortOrder";

export type MusicTrackOrderByInput = {
  createdAt?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  promptId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
