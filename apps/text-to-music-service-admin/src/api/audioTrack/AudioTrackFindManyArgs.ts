import { AudioTrackWhereInput } from "./AudioTrackWhereInput";
import { AudioTrackOrderByInput } from "./AudioTrackOrderByInput";

export type AudioTrackFindManyArgs = {
  where?: AudioTrackWhereInput;
  orderBy?: Array<AudioTrackOrderByInput>;
  skip?: number;
  take?: number;
};
