import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async create(createCommentDto: CreateCommentDto) {
    return this.commentsRepository.create(createCommentDto);
  }

  async remove(id: number) {
    try {
      return await this.commentsRepository.remove(id);
    } catch (error) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
  }

  async findByTaskId(taskId: number) {
    return this.commentsRepository.findByTaskId(taskId);
  }
}
