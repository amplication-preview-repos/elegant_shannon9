import { AppUser } from "../appUser/AppUser";
import { MusicTrack } from "../musicTrack/MusicTrack";

export type Prompt = {
  appUser?: AppUser | null;
  content: string | null;
  createdAt: Date;
  id: string;
  musicTracks?: Array<MusicTrack>;
  updatedAt: Date;
};
