import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ Category ]) ],
  controllers: [ CategoryController ],
  providers: [ CategoryService ],
  exports: [ CategoryService ]
})
export class CategoryModule {
}
