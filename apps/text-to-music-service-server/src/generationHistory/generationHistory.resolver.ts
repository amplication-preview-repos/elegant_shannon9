import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GenerationHistoryResolverBase } from "./base/generationHistory.resolver.base";
import { GenerationHistory } from "./base/GenerationHistory";
import { GenerationHistoryService } from "./generationHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GenerationHistory)
export class GenerationHistoryResolver extends GenerationHistoryResolverBase {
  constructor(
    protected readonly service: GenerationHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
