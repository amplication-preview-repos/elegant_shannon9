import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GenerationHistoryServiceBase } from "./base/generationHistory.service.base";

@Injectable()
export class GenerationHistoryService extends GenerationHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
