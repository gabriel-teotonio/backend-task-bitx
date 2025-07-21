import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}
  private readonly logger = new Logger(CommentsService.name);

  async create(createCommentDto: CreateCommentDto) {
    try {
        this.logger.log(`Criando comentário para task ${createCommentDto.taskId}`);
        const comment = await this.commentsRepository.create(createCommentDto);

        this.logger.log(`Comentário criado com sucesso: ${comment.id}`);
        return comment;

        
    } catch (error) {
        this.logger.error(`Erro ao criar comentário: ${error.message}`, error.stack);

        if (error instanceof BadRequestException) {
        throw error;
      }
      
      // Se for erro de foreign key (task não existe)
      if (error.code === 'P2003') {
        throw new BadRequestException(`Task com ID ${createCommentDto.taskId} não encontrada`);
      }
      
      throw new InternalServerErrorException('Erro interno ao criar comentário');
        
        
    }
  }

  async remove(id: number) {
    try {
        this.logger.log(`Removendo comentário com id ${id}`);
        const comment = await this.commentsRepository.remove(id);

        if (!comment) {
        throw new NotFoundException(`Comentário com ID ${id} não encontrado`);
      }

        this.logger.log(`Comentário removido com sucesso: ${comment.id}`);
        return comment;
    } catch (error) {
       this.logger.error(`Erro ao remover comentário ${id}: ${error.message}`, error.stack);
      
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      
      // Se for erro de registro não encontrado
      if (error.code === 'P2025') {
        throw new NotFoundException(`Comentário com ID ${id} não encontrado`);
      }
      
      throw new InternalServerErrorException('Erro interno ao remover comentário');
    }
  }

  // Busca comentários por ID da task
  async findByTaskId(taskId: number) {
    try {
        this.logger.log(`Buscando comentários para task ${taskId}`);
        const comments = await this.commentsRepository.findByTaskId(taskId);
    
        this.logger.log(`Comentários encontrados: ${comments.length} para task ${taskId}`);
        return comments;
        
    } catch (error) {
         this.logger.error(`Erro ao buscar comentários da task ${taskId}: ${error.message}`, error.stack);
      
      if (error instanceof BadRequestException) {
        throw error;
      }
      
      throw new InternalServerErrorException('Erro interno ao buscar comentários');
    }
  }
}
