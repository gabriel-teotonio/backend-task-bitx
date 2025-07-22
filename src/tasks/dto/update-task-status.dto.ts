import { Status } from "@prisma/client";
import { IsEnum } from "class-validator";

export class UpdateTaskStatusDto {
  @IsEnum(Status, { message: 'Status deve ser um valor válido: "PENDING" | "IN_PROGRESS" | "TESTING" | "DONE"' })
  status: Status;
} 