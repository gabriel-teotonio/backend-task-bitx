import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Status } from '@prisma/client';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            create: jest.fn().mockResolvedValue({ id: 1 }),
            update: jest.fn().mockResolvedValue({ id: 1 }),
            updateStatus: jest.fn().mockResolvedValue({ id: 1, status: Status.DONE }),
            remove: jest.fn().mockResolvedValue({ id: 1 }),
          },
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all tasks', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should create a task', async () => {
    const dto: CreateTaskDto = { title: 'Test' };
    expect(await controller.create(dto)).toEqual({ id: 1 });
  });

  it('should update a task', async () => {
    const dto: UpdateTaskDto = { title: 'Updated' };
    expect(await controller.update('1', dto)).toEqual({ id: 1 });
  });

  it('should update task status', async () => {
    const dto: UpdateTaskStatusDto = { status: Status.DONE };
    expect(await controller.updateStatus('1', dto)).toEqual({ id: 1, status: Status.DONE });
  });

  it('should remove a task', async () => {
    expect(await controller.remove('1')).toEqual({ id: 1 });
  });
}); 