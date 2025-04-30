import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { TasksService } from "../tasks.service";

@Injectable()
export class TaskExistsPipe implements PipeTransform<any> {
  constructor(private readonly taskService: TasksService) {}

  async transform(taskId: number): Promise<number | unknown> {

    const task = await this.taskService.findOne(taskId);
    if (!task) {
      throw new NotFoundException(`Task with id: ${taskId} not found`);
    }
    return taskId;
  }
}