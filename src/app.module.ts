import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';
import { AppController } from './app.controler';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule,
        MulterModule.register({
            storage: multer.memoryStorage(),
        })],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
