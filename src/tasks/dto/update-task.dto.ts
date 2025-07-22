import { Status } from "@prisma/client";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
} 