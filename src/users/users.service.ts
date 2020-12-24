import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';

@Injectable()
class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async getUser(id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: [
        'address',
        'name',
        'pic',
        'twitter',
        'telegram',
        'color',
        'background',
      ],
      where: [{ id: id }],
    });
  }
  async saveUser(user: User) {
    this.usersRepository.save(user);
  }
  async updateUser(user: User) {
    this.usersRepository.update(user.id, user);
  }
  async deleteUser(user: User) {
    this.usersRepository.delete(user);
  }
}
export default UsersService;
