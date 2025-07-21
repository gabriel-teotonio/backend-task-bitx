import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: createCommentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.comment.delete({
      where: { id },
    });
  }

  async findByTaskId(taskId: number) {
    return this.prisma.comment.findMany({
      where: { taskId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
