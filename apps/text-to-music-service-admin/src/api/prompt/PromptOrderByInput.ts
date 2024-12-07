import { SortOrder } from "../../util/SortOrder";

export type PromptOrderByInput = {
  appUserId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
