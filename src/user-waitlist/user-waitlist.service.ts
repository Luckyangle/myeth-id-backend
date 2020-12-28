import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserWaitlist from './user-waitlist.entity';

@Injectable()
class UserWaitlistService {
  constructor(
    @InjectRepository(UserWaitlist)
    private UserWaitlistRepository: Repository<UserWaitlist>,
  ) {}
  async getUsers(): Promise<UserWaitlist[]> {
    return await this.UserWaitlistRepository.find();
  }
  async getUserNum(): Promise<number> {
    return await this.UserWaitlistRepository.count();
  }
  async getUser(id: number): Promise<UserWaitlist[]> {
    return await this.UserWaitlistRepository.find({
      select: ['address', 'twitter'],
      where: [{ id: id }],
    });
  }
  async saveUser(user: UserWaitlist) {
    this.UserWaitlistRepository.save(user);
  }
}
export default UserWaitlistService;
