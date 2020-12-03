import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/auth/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: User = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (user && bcrypt.compare(user.password, pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { user };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registration(user: CreateUserDto): Promise<any> {
    const userInDb = await this.userRepository.findOne({
      where: {
        email: user.email,
      },
    });
    if (!userInDb) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await this.userRepository.save({
        ...user,
        password: hashedPassword,
      });
      return Promise.resolve({
        statusCode: HttpStatus.CREATED,
        message: 'Congratulations, you are successfully registered',
      });
    } else {
      return Promise.reject({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'This email is already taken',
      });
    }
  }
}
