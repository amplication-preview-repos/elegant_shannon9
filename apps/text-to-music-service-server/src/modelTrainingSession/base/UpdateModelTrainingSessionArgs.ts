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
import { ModelTrainingSessionWhereUniqueInput } from "./ModelTrainingSessionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ModelTrainingSessionUpdateInput } from "./ModelTrainingSessionUpdateInput";

@ArgsType()
class UpdateModelTrainingSessionArgs {
  @ApiProperty({
    required: true,
    type: () => ModelTrainingSessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ModelTrainingSessionWhereUniqueInput)
  @Field(() => ModelTrainingSessionWhereUniqueInput, { nullable: false })
  where!: ModelTrainingSessionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ModelTrainingSessionUpdateInput,
  })
  @ValidateNested()
  @Type(() => ModelTrainingSessionUpdateInput)
  @Field(() => ModelTrainingSessionUpdateInput, { nullable: false })
  data!: ModelTrainingSessionUpdateInput;
}

export { UpdateModelTrainingSessionArgs as UpdateModelTrainingSessionArgs };
