import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MusicTrackModuleBase } from "./base/musicTrack.module.base";
import { MusicTrackService } from "./musicTrack.service";
import { MusicTrackController } from "./musicTrack.controller";
import { MusicTrackResolver } from "./musicTrack.resolver";

@Module({
  imports: [MusicTrackModuleBase, forwardRef(() => AuthModule)],
  controllers: [MusicTrackController],
  providers: [MusicTrackService, MusicTrackResolver],
  exports: [MusicTrackService],
})
export class MusicTrackModule {}
