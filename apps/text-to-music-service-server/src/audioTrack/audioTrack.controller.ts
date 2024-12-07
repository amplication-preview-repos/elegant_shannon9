import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AudioTrackService } from "./audioTrack.service";
import { AudioTrackControllerBase } from "./base/audioTrack.controller.base";

@swagger.ApiTags("audioTracks")
@common.Controller("audioTracks")
export class AudioTrackController extends AudioTrackControllerBase {
  constructor(
    protected readonly service: AudioTrackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
