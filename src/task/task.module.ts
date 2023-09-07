import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "../category/entities/category.entity";
import { Task } from "./entities/task.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ Task, Category ]) ],
  controllers: [ TaskController ],
  providers: [ TaskService ],
  exports: [ TaskService ]
})
export class TaskModule {
}
