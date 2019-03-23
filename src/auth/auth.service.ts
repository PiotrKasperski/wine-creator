import { Injectable } from '@nestjs/common';
import {LoginService} from "../login/login.service";
import * as jwt from 'jsonwebtoken';
import {Users} from "../login/users.entity";

@Injectable()
export class AuthService {
    constructor(private readonly userService: LoginService){};

    async createToken(id: number, username: string){
        const expiresIn = 60 * 60;
        const secretOrKey = 'secret';
        const user = {username};
        const token = jwt.sign(user, secretOrKey,{expiresIn});

        return  token;
    }
    async validateUser(signedUser: Users): Promise<Boolean>{
        if (signedUser&&signedUser.username){
            return Boolean(this.userService.getUserByUsername(signedUser.username))
        }
        return false;
    }
}
