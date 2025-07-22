import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Status } from 'generated/prisma';

@Injectable()
export class TasksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }

  async update(id: number, data: UpdateTaskDto) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async updateStatus(id: number, status: Status) {
    return this.prisma.task.update({ where: { id }, data: { status: status } });
  }

  async remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
} 