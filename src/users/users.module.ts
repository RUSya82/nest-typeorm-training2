import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "../tasks/entities/task.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Task])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
