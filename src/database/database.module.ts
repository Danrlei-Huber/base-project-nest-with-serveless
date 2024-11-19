import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?options=-c%20search_path=${process.env.DB_SCHEMA}`,
                autoLoadEntities: true,
                synchronize: Boolean(process.env.DB_SYNCHRONIZE),
                logging: false 
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}