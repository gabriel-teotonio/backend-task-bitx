import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Status } from 'generated/prisma';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  findAll() {
    return this.tasksRepository.findAll();
  }

  create(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.create(createTaskDto);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.update(id, updateTaskDto);
  }

  updateStatus(id: number, status: Status) {
    return this.tasksRepository.updateStatus(id, status);
  }

  remove(id: number) {
    return this.tasksRepository.remove(id);
  }
} 