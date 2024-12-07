import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ModelTrainingSessionModuleBase } from "./base/modelTrainingSession.module.base";
import { ModelTrainingSessionService } from "./modelTrainingSession.service";
import { ModelTrainingSessionController } from "./modelTrainingSession.controller";
import { ModelTrainingSessionResolver } from "./modelTrainingSession.resolver";

@Module({
  imports: [ModelTrainingSessionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ModelTrainingSessionController],
  providers: [ModelTrainingSessionService, ModelTrainingSessionResolver],
  exports: [ModelTrainingSessionService],
})
export class ModelTrainingSessionModule {}
