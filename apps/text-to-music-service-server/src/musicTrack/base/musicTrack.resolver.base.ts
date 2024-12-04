/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { MusicTrack } from "./MusicTrack";
import { MusicTrackCountArgs } from "./MusicTrackCountArgs";
import { MusicTrackFindManyArgs } from "./MusicTrackFindManyArgs";
import { MusicTrackFindUniqueArgs } from "./MusicTrackFindUniqueArgs";
import { CreateMusicTrackArgs } from "./CreateMusicTrackArgs";
import { UpdateMusicTrackArgs } from "./UpdateMusicTrackArgs";
import { DeleteMusicTrackArgs } from "./DeleteMusicTrackArgs";
import { Prompt } from "../../prompt/base/Prompt";
import { MusicTrackService } from "../musicTrack.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MusicTrack)
export class MusicTrackResolverBase {
  constructor(
    protected readonly service: MusicTrackService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MusicTrack",
    action: "read",
    possession: "any",
  })
  async _musicTracksMeta(
    @graphql.Args() args: MusicTrackCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MusicTrack])
  @nestAccessControl.UseRoles({
    resource: "MusicTrack",
    action: "read",
    possession: "any",
  })
  async musicTracks(
    @graphql.Args() args: MusicTrackFindManyArgs
  ): Promise<MusicTrack[]> {
    return this.service.musicTracks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MusicTrack, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MusicTrack",
    action: "read",
    possession: "own",
  })
  async musicTrack(
    @graphql.Args() args: MusicTrackFindUniqueArgs
  ): Promise<MusicTrack | null> {
    const result = await this.service.musicTrack(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MusicTrack)
  @nestAccessControl.UseRoles({
    resource: "MusicTrack",
    action: "create",
    possession: "any",
  })
  async createMusicTrack(
    @graphql.Args() args: CreateMusicTrackArgs
  ): Promise<MusicTrack> {
    return await this.service.createMusicTrack({
      ...args,
      data: {
        ...args.data,

        prompt: args.data.prompt
          ? {
              connect: args.data.prompt,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MusicTrack)
  @nestAccessControl.UseRoles({
    resource: "MusicTrack",
    action: "update",
    possession: "any",
  })
  async updateMusicTrack(
    @graphql.Args() args: UpdateMusicTrackArgs
  ): Promise<MusicTrack | null> {
    try {
      return await this.service.updateMusicTrack({
        ...args,
        data: {
          ...args.data,

          prompt: args.data.prompt
            ? {
                connect: args.data.prompt,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MusicTrack)
  @nestAccessControl.UseRoles({
    resource: "MusicTrack",
    action: "delete",
    possession: "any",
  })
  async deleteMusicTrack(
    @graphql.Args() args: DeleteMusicTrackArgs
  ): Promise<MusicTrack | null> {
    try {
      return await this.service.deleteMusicTrack(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Prompt, {
    nullable: true,
    name: "prompt",
  })
  @nestAccessControl.UseRoles({
    resource: "Prompt",
    action: "read",
    possession: "any",
  })
  async getPrompt(
    @graphql.Parent() parent: MusicTrack
  ): Promise<Prompt | null> {
    const result = await this.service.getPrompt(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}