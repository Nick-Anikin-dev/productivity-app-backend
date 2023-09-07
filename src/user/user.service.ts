import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
  }
  async createUser(dto: CreateUserDto) {
    const new_user = await this.userRepository.create(dto);
    const { password, ...user } = await this.userRepository.save(new_user);
    return { ...user};
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async getUserById(id) {
    return await this.userRepository.findOne({
      select: [
        'id', 'first_name', 'last_name', 'email',
      ],
      where: { id },
    });
  }
}
