import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GenerationHistoryService } from "./generationHistory.service";
import { GenerationHistoryControllerBase } from "./base/generationHistory.controller.base";

@swagger.ApiTags("generationHistories")
@common.Controller("generationHistories")
export class GenerationHistoryController extends GenerationHistoryControllerBase {
  constructor(
    protected readonly service: GenerationHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
