import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { InfraModule } from './infra/infra.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import 'dotenv/config';

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true,
    }), UsersModule, TasksModule, InfraModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
