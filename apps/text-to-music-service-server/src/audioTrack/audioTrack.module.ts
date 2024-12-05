import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AudioTrackModuleBase } from "./base/audioTrack.module.base";
import { AudioTrackService } from "./audioTrack.service";
import { AudioTrackController } from "./audioTrack.controller";
import { AudioTrackResolver } from "./audioTrack.resolver";

@Module({
  imports: [AudioTrackModuleBase, forwardRef(() => AuthModule)],
  controllers: [AudioTrackController],
  providers: [AudioTrackService, AudioTrackResolver],
  exports: [AudioTrackService],
})
export class AudioTrackModule {}
