import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WineController } from './wine/wine.controller';
import { WineService } from './wine/wine.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Wine} from "./wine/wine.entity";
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { WineModule } from './wine/wine.module';
import {CorsMiddleware} from "./cors.middleware";



@Module({
  imports: [TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "wineDataBase",
      entities: ["src/**/*.entity{.ts,.js}"],
      synchronize: true
  }),
      TypeOrmModule.forFeature([Wine]), LoginModule, AuthModule, WineModule],
  controllers: [AppController, WineController],
  providers: [AppService, WineService],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(CorsMiddleware).forRoutes('*')
    }
}
