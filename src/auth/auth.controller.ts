import { Controller, Post, Body } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){};

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.registration(createUserDto);
  }
}
