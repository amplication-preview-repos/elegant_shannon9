import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModelTrainingSessionServiceBase } from "./base/modelTrainingSession.service.base";

@Injectable()
export class ModelTrainingSessionService extends ModelTrainingSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
