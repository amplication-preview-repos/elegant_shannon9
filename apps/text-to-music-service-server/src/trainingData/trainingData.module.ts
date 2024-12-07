import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrainingDataModuleBase } from "./base/trainingData.module.base";
import { TrainingDataService } from "./trainingData.service";
import { TrainingDataController } from "./trainingData.controller";
import { TrainingDataResolver } from "./trainingData.resolver";

@Module({
  imports: [TrainingDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrainingDataController],
  providers: [TrainingDataService, TrainingDataResolver],
  exports: [TrainingDataService],
})
export class TrainingDataModule {}
