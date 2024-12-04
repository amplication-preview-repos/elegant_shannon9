/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PromptWhereUniqueInput } from "../../prompt/base/PromptWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PromptUpdateManyWithoutAppUsersInput {
  @Field(() => [PromptWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromptWhereUniqueInput],
  })
  connect?: Array<PromptWhereUniqueInput>;

  @Field(() => [PromptWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromptWhereUniqueInput],
  })
  disconnect?: Array<PromptWhereUniqueInput>;

  @Field(() => [PromptWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromptWhereUniqueInput],
  })
  set?: Array<PromptWhereUniqueInput>;
}

export { PromptUpdateManyWithoutAppUsersInput as PromptUpdateManyWithoutAppUsersInput };