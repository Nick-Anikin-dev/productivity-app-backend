import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    title: string;
}
