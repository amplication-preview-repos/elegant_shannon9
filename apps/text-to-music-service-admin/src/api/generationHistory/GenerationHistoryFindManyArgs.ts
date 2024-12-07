import { GenerationHistoryWhereInput } from "./GenerationHistoryWhereInput";
import { GenerationHistoryOrderByInput } from "./GenerationHistoryOrderByInput";

export type GenerationHistoryFindManyArgs = {
  where?: GenerationHistoryWhereInput;
  orderBy?: Array<GenerationHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
