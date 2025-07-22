import { Injectable, OnModuleInit, OnModuleDestroy, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
    console.log('🔌 Database connected successfully');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('🔌 Database disconnected');
  }

  async enableShutdownHooks(app: INestApplication) {
    // Tipagem correta para o evento beforeExit
    (this as any).$on('beforeExit', async () => {
      await app.close();
    });
  }

  // Método auxiliar para cleanup manual se necessário
  async cleanupConnection() {
    await this.$disconnect();
  }
}