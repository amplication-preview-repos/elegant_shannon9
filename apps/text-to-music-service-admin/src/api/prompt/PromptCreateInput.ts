import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { MusicTrackCreateNestedManyWithoutPromptsInput } from "./MusicTrackCreateNestedManyWithoutPromptsInput";

export type PromptCreateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  content?: string | null;
  musicTracks?: MusicTrackCreateNestedManyWithoutPromptsInput;
};
