import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(data: CreateUserDto) {
    try {
      const newUser = this.userRepo.create(data);
      //const hashPassword = await bcrypt.hash(newUser.password, 10);
      //newUser.password = hashPassword;
      return await this.userRepo.save(newUser);
    } catch (error) {
      throw new BadRequestException(`${error.message || 'Unexpected Error'}'`);
    }
  }

  async findAll() {
    return await this.userRepo.find({
      select: ['firstName', 'lastName', 'nickName', 'email', 'id', 'role'],
    });
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({
      where: { id },
      select: ['firstName', 'lastName', 'nickName', 'email', 'id'],
    });
    if (!user) {
      throw new NotFoundException('Este usuario no se encontro');
    }
    return user;
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.findOne(id);
    this.userRepo.merge(user, data);
    return this.userRepo.save(user);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.userRepo.delete(id);
    return { Message: "Usuario Eliminado"}
  }

  async findByNickName(nickName: string) {
    const user = await this.userRepo.findOne({
      where: { nickName },
      select: ['firstName', 'lastName', 'nickName', 'email', 'id', 'password', 'role'],
    });
    if (!user) {
      throw new NotFoundException('Este usuario no existe');
    }
    return user;
  }
}
