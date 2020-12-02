import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: CreateUserDto): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findOne(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        email: email,
      }
    });
  }

  async remove(id: string): Promise<User> {
    const userToRemove = await this.userRepository.findOne(id);
    return await this.userRepository.remove(userToRemove);
  }

  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save({
      ...updateUserDto,
      id: Number(id),
    });
  }
}
