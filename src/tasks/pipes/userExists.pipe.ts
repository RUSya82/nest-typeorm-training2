import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from "../../users/users.service";
import { UpdateTaskDto } from "../dto/update-task.dto";

@Injectable()
export class UserExistsPipe implements PipeTransform<any> {
  constructor(private readonly usersService: UsersService) {}

  async transform(body: UpdateTaskDto): Promise<UpdateTaskDto> {
    const userId = body.userId;
    //
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