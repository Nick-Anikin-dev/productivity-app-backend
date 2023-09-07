import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from "../config/database.config";
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ ConfigModule.forRoot({isGlobal: true}), TaskModule, CategoryModule, AuthModule, DatabaseModule, UserModule, DashboardModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
}
