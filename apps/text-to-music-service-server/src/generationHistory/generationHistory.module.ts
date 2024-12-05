import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GenerationHistoryModuleBase } from "./base/generationHistory.module.base";
import { GenerationHistoryService } from "./generationHistory.service";
import { GenerationHistoryController } from "./generationHistory.controller";
import { GenerationHistoryResolver } from "./generationHistory.resolver";

@Module({
  imports: [GenerationHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [GenerationHistoryController],
  providers: [GenerationHistoryService, GenerationHistoryResolver],
  exports: [GenerationHistoryService],
})
export class GenerationHistoryModule {}
