import { SortOrder } from "../../util/SortOrder";

export type GenerationHistoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  parameters?: SortOrder;
  prompt?: SortOrder;
  resultAudioPath?: SortOrder;
  updatedAt?: SortOrder;
};
