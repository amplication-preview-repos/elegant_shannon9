import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AudioTrackServiceBase } from "./base/audioTrack.service.base";

@Injectable()
export class AudioTrackService extends AudioTrackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
