import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hell!';
  }
  getHelloName(request: Request): string {
    console.log(request.params);
    return 'chchu';
  }
}
