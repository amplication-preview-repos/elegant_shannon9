import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ModelTrainingSessionService } from "./modelTrainingSession.service";
import { ModelTrainingSessionControllerBase } from "./base/modelTrainingSession.controller.base";

@swagger.ApiTags("modelTrainingSessions")
@common.Controller("modelTrainingSessions")
export class ModelTrainingSessionController extends ModelTrainingSessionControllerBase {
  constructor(
    protected readonly service: ModelTrainingSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
