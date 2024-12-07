import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ModelTrainingSessionResolverBase } from "./base/modelTrainingSession.resolver.base";
import { ModelTrainingSession } from "./base/ModelTrainingSession";
import { ModelTrainingSessionService } from "./modelTrainingSession.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ModelTrainingSession)
export class ModelTrainingSessionResolver extends ModelTrainingSessionResolverBase {
  constructor(
    protected readonly service: ModelTrainingSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
