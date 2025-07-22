import { Status } from "@prisma/client";
import { IsEnum } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskStatusDto {
  @ApiProperty({ example: 'IN_PROGRESS', enum: ['PENDING', 'IN_PROGRESS', 'TESTING', 'DONE'] })
  @IsEnum(Status, { message: 'status must be a valid Status enum value' })
  status: Status;
} 