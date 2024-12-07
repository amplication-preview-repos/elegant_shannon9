import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TrainingDataResolverBase } from "./base/trainingData.resolver.base";
import { TrainingData } from "./base/TrainingData";
import { TrainingDataService } from "./trainingData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TrainingData)
export class TrainingDataResolver extends TrainingDataResolverBase {
  constructor(
    protected readonly service: TrainingDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
