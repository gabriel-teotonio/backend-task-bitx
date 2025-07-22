import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Status } from '@prisma/client';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

describe('TasksService', () => {
  let service: TasksService;
  let repository: TasksRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: TasksRepository,
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

    service = module.get<TasksService>(TasksService);
    repository = module.get<TasksRepository>(TasksRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all tasks', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should create a task', async () => {
    const dto: CreateTaskDto = { title: 'Test' };
    expect(await service.create(dto)).toEqual({ id: 1 });
  });

  it('should update a task', async () => {
    const dto: UpdateTaskDto = { title: 'Updated' };
    expect(await service.update(1, dto)).toEqual({ id: 1 });
  });

  it('should update task status', async () => {
    const dto: UpdateTaskStatusDto = { status: Status.DONE };
    expect(await service.updateStatus(1, dto)).toEqual({ id: 1, status: Status.DONE });
  });

  it('should remove a task', async () => {
    expect(await service.remove(1)).toEqual({ id: 1 });
  });
}); 