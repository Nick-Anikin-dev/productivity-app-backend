import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @MinLength(1)
    title?: string;

    @IsOptional()
    @IsString()
    @MinLength(1)
    description?: string;

    @IsOptional()
    @IsNumber()
    category_id?: number;

    @IsBoolean()
    @IsOptional()
    is_completed?: boolean;
}
