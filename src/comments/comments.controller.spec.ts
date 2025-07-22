import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

describe('CommentsController', () => {
  let controller: CommentsController;
  let service: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsController],
      providers: [
        {
          provide: CommentsService,
          useValue: {
            findAllByTaskId: jest.fn().mockResolvedValue([]),
            create: jest.fn().mockResolvedValue({ id: 1 }),
            updateById: jest.fn().mockResolvedValue({ id: 1 }),
            removeById: jest.fn().mockResolvedValue({ id: 1 }),
          },
        },
      ],
    }).compile();

    controller = module.get<CommentsController>(CommentsController);
    service = module.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all comments by task id', async () => {
    expect(await controller.findByTaskId(1)).toEqual([]);
  });

  it('should create a comment', async () => {
    const dto: CreateCommentDto = { content: 'Test', taskId: 1 };
    expect(await controller.create(dto)).toEqual({ id: 1 });
  });

  it('should remove a comment by id', async () => {
    expect(await controller.remove(1)).toEqual({ id: 1 });
  });
}); 