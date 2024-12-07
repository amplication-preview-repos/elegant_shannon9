/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GenerationHistoryWhereUniqueInput } from "./GenerationHistoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteGenerationHistoryArgs {
  @ApiProperty({
    required: true,
    type: () => GenerationHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GenerationHistoryWhereUniqueInput)
  @Field(() => GenerationHistoryWhereUniqueInput, { nullable: false })
  where!: GenerationHistoryWhereUniqueInput;
}

export { DeleteGenerationHistoryArgs as DeleteGenerationHistoryArgs };
