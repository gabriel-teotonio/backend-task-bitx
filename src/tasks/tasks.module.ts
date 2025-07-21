import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma/prisma.service';
import { TasksRepository } from './tasks.repository';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TasksRepository, PrismaService],
})
export class TasksModule {} 