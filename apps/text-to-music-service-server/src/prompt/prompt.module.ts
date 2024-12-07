import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PromptModuleBase } from "./base/prompt.module.base";
import { PromptService } from "./prompt.service";
import { PromptController } from "./prompt.controller";
import { PromptResolver } from "./prompt.resolver";

@Module({
  imports: [PromptModuleBase, forwardRef(() => AuthModule)],
  controllers: [PromptController],
  providers: [PromptService, PromptResolver],
  exports: [PromptService],
})
export class PromptModule {}
