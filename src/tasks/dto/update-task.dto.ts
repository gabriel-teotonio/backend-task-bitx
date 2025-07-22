import { Status } from "@prisma/client";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiPropertyOptional({ example: 'Novo título da tarefa' })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({ example: 'Nova descrição da tarefa' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: 'IN_PROGRESS', enum: ['PENDING', 'IN_PROGRESS', 'TESTING', 'DONE'] })
  @IsOptional()
  @IsEnum(Status)
  status?: Status;
} 