import { Test, TestingModule } from '@nestjs/testing';
import { CommentsService } from './comments.service';
import { CommentsRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';

describe('CommentsService', () => {
  let service: CommentsService;
  let repository: CommentsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        {
          provide: CommentsRepository,
          useValue: {
            findAllByTaskId: jest.fn().mockResolvedValue([]),
            create: jest.fn().mockResolvedValue({ id: 1 }),
            updateById: jest.fn().mockResolvedValue({ id: 1 }),
            removeById: jest.fn().mockResolvedValue({ id: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<CommentsService>(CommentsService);
    repository = module.get<CommentsRepository>(CommentsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all comments by task id', async () => {
    expect(await service.findByTaskId(1)).toEqual([]);
  });

  it('should create a comment', async () => {
    const dto: CreateCommentDto = { content: 'Test', taskId: 1 };
    expect(await service.create(dto)).toEqual({ id: 1 });
  });

  it('should remove a comment by id', async () => {
    expect(await service.remove(1)).toEqual({ id: 1 });
  });
}); 