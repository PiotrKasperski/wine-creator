import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { LoginService } from './login.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule {}
