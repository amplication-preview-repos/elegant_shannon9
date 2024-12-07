import { AudioTrack as TAudioTrack } from "../api/audioTrack/AudioTrack";

export const AUDIOTRACK_TITLE_FIELD = "title";

export const AudioTrackTitle = (record: TAudioTrack): string => {
  return record.title?.toString() || String(record.id);
};
