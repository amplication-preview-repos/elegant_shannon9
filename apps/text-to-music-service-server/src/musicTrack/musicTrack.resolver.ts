import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MusicTrackResolverBase } from "./base/musicTrack.resolver.base";
import { MusicTrack } from "./base/MusicTrack";
import { MusicTrackService } from "./musicTrack.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MusicTrack)
export class MusicTrackResolver extends MusicTrackResolverBase {
  constructor(
    protected readonly service: MusicTrackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
