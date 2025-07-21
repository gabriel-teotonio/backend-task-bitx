import { IsNotEmpty, IsString, IsInt, IsPositive, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({ message: 'Conteúdo do comentário é obrigatório' })
  @IsString({ message: 'Conteúdo deve ser uma string' })
  @MinLength(1, { message: 'Conteúdo deve ter pelo menos 1 caractere' })
  @MaxLength(1000, { message: 'Conteúdo não pode exceder 1000 caracteres' })
  content: string;

  @IsNotEmpty({ message: 'ID da task é obrigatório' })
  @IsInt({ message: 'ID da task deve ser um número inteiro' })
  @IsPositive({ message: 'ID da task deve ser positivo' })
  taskId: number;
}