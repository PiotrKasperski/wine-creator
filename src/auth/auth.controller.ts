import {Body, Controller, Header, HttpStatus, Post, Response} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginService} from "../login/login.service";
import {Users} from "../login/users.entity";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: LoginService
    ){};

    @Post('register')
    async registerUser(@Response() res: any, @Body() body: Users){
       let user = await this.userService.getUserByUsername(body.username);
       if (user){
           return res.status(HttpStatus.FORBIDDEN).json({messsage: 'Username alredy exsist'})
       } else {
           user = await this.userService.createUser(body);
           if (user){
               user.passwordHash = undefined;
           }
       }
       return res.status(HttpStatus.CREATED).json(user);
    }
    @Post('login')
    async loginUser(@Response() res: any, @Body() body: Users){
        const user = await this.userService.getUserByUsername(body.username);
        if(user){
            if(await this.userService.compareHash(body.password, user.passwordHash)){
                return res.status(HttpStatus.ACCEPTED).json({token: 'Bearer '+await this.authService.createToken(user.id, user.username), username: user.username, email: user.email, userId: user.id})
            }
        }
        return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username or password wrong!' });
    }

}
