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
import { ModelTrainingSessionWhereInput } from "./ModelTrainingSessionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ModelTrainingSessionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ModelTrainingSessionWhereInput,
  })
  @ValidateNested()
  @Type(() => ModelTrainingSessionWhereInput)
  @IsOptional()
  @Field(() => ModelTrainingSessionWhereInput, {
    nullable: true,
  })
  every?: ModelTrainingSessionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ModelTrainingSessionWhereInput,
  })
  @ValidateNested()
  @Type(() => ModelTrainingSessionWhereInput)
  @IsOptional()
  @Field(() => ModelTrainingSessionWhereInput, {
    nullable: true,
  })
  some?: ModelTrainingSessionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ModelTrainingSessionWhereInput,
  })
  @ValidateNested()
  @Type(() => ModelTrainingSessionWhereInput)
  @IsOptional()
  @Field(() => ModelTrainingSessionWhereInput, {
    nullable: true,
  })
  none?: ModelTrainingSessionWhereInput;
}
export { ModelTrainingSessionListRelationFilter as ModelTrainingSessionListRelationFilter };
