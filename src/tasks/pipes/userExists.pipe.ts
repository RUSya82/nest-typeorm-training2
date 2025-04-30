import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { User } from "../../users/entities/user.entity";
import { UsersService } from "../../users/users.service";
import { CreateTaskDto } from "../dto/create-task.dto";

@Injectable()
export class UserExistsPipe implements PipeTransform<any> {
  constructor(private readonly usersService: UsersService) {}

  async transform(body: CreateTaskDto): Promise<CreateTaskDto> {
    const userId = body.userId;
    if(!userId){
      return body;
    }
    const user = await this.usersService.findOne(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    body.user = user;
    return body;
  }
}