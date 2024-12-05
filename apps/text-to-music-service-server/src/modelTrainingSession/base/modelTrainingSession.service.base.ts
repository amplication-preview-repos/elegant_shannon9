/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ModelTrainingSession as PrismaModelTrainingSession,
} from "@prisma/client";

export class ModelTrainingSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ModelTrainingSessionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.modelTrainingSession.count(args);
  }

  async modelTrainingSessions(
    args: Prisma.ModelTrainingSessionFindManyArgs
  ): Promise<PrismaModelTrainingSession[]> {
    return this.prisma.modelTrainingSession.findMany(args);
  }
  async modelTrainingSession(
    args: Prisma.ModelTrainingSessionFindUniqueArgs
  ): Promise<PrismaModelTrainingSession | null> {
    return this.prisma.modelTrainingSession.findUnique(args);
  }
  async createModelTrainingSession(
    args: Prisma.ModelTrainingSessionCreateArgs
  ): Promise<PrismaModelTrainingSession> {
    return this.prisma.modelTrainingSession.create(args);
  }
  async updateModelTrainingSession(
    args: Prisma.ModelTrainingSessionUpdateArgs
  ): Promise<PrismaModelTrainingSession> {
    return this.prisma.modelTrainingSession.update(args);
  }
  async deleteModelTrainingSession(
    args: Prisma.ModelTrainingSessionDeleteArgs
  ): Promise<PrismaModelTrainingSession> {
    return this.prisma.modelTrainingSession.delete(args);
  }
}