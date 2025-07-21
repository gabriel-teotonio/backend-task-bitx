import { Status } from "generated/prisma";

export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: Status;
} 