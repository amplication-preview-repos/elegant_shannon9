import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PromptService } from "./prompt.service";
import { PromptControllerBase } from "./base/prompt.controller.base";

@swagger.ApiTags("prompts")
@common.Controller("prompts")
export class PromptController extends PromptControllerBase {
  constructor(
    protected readonly service: PromptService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
