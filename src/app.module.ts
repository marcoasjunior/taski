import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { InfraModule } from './infra/infra.module';
import { ConfigModule } from '@nestjs/config';
import 'dotenv/config';

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true,
    }), UsersModule, TasksModule, InfraModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
