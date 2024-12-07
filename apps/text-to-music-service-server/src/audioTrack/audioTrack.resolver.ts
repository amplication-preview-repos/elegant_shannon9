import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AudioTrackResolverBase } from "./base/audioTrack.resolver.base";
import { AudioTrack } from "./base/AudioTrack";
import { AudioTrackService } from "./audioTrack.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AudioTrack)
export class AudioTrackResolver extends AudioTrackResolverBase {
  constructor(
    protected readonly service: AudioTrackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
