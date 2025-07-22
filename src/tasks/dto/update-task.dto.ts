import { IsOptional, IsString } from "class-validator";
import { Status } from "generated/prisma";

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  status?: Status;
} 