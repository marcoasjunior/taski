import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [UsersModule, TasksModule, InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
