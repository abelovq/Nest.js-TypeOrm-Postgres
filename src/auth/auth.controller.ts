import { Controller, Post, Body } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){};

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.registration(createUserDto);
  }
}
