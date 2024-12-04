import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MusicTrackListRelationFilter } from "../musicTrack/MusicTrackListRelationFilter";

export type PromptWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  musicTracks?: MusicTrackListRelationFilter;
};
