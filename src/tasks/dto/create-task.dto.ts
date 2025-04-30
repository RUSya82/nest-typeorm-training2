import { User } from "../../users/entities/user.entity";
import { Allow, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateTaskDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @Allow()
  @Type(() => User)
  user?: User;

  @IsOptional()
  @IsNumber()
  userId?: number;
}
