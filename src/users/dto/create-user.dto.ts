import { Task } from "../../tasks/entities/task.entity";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateUserDto {


  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  tasks?: Task[]
}
