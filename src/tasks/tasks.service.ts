import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>
  ) {
  }


  create(createTaskDto: CreateTaskDto) {
    const {userId, ...taskData} = createTaskDto;
    const task = this.taskRepository.create({
      ...taskData
    });
    return this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find({relations: ["user"]});
  }

  findOne(id: number) {
    return this.taskRepository.findOne({where: {id}, relations: ["user"]});
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const {userId, ...taskData} = updateTaskDto;
    // const task = this.taskRepository.create({
    //   ...taskData
    // });
    return this.taskRepository.update(id, taskData);
  }

  remove(id: number) {
    return this.taskRepository.delete({id});
  }
}
