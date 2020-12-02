import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
        }
      })
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null;
  }

  async login(user: any) {
      const payload = { id: user.id };
      return {
          access_token: this.jwtService.sign(payload),
      }
  }
}
