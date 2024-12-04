import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { MusicTrackUpdateManyWithoutPromptsInput } from "./MusicTrackUpdateManyWithoutPromptsInput";

export type PromptUpdateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  content?: string | null;
  musicTracks?: MusicTrackUpdateManyWithoutPromptsInput;
};
