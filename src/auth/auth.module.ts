import * as passport from 'passport';
import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
} from '@nestjs/common';
import {LoginModule} from "../login/login.module";
import {AuthService} from "./auth.service";
import {JwtStrategy} from "./jwt.strategy";
import {AuthController} from "./auth.controller";


@Module({
    imports: [LoginModule],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false }))
            .forRoutes(
                { path: '/wine', method: RequestMethod.ALL },
                { path: '/wine/*', method: RequestMethod.ALL });
    }
}