/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppUserWhereUniqueInput } from "../../appUser/base/AppUserWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { MusicTrackUpdateManyWithoutPromptsInput } from "./MusicTrackUpdateManyWithoutPromptsInput";

@InputType()
class PromptUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AppUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppUserWhereUniqueInput)
  @IsOptional()
  @Field(() => AppUserWhereUniqueInput, {
    nullable: true,
  })
  appUser?: AppUserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => MusicTrackUpdateManyWithoutPromptsInput,
  })
  @ValidateNested()
  @Type(() => MusicTrackUpdateManyWithoutPromptsInput)
  @IsOptional()
  @Field(() => MusicTrackUpdateManyWithoutPromptsInput, {
    nullable: true,
  })
  musicTracks?: MusicTrackUpdateManyWithoutPromptsInput;
}

export { PromptUpdateInput as PromptUpdateInput };
