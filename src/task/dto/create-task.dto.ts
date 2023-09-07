import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    title: string;

    @IsOptional()
    @IsString()
    @MinLength(1)
    description?: string;

    @IsOptional()
    @IsNumber()
    category_id?: number;
}
