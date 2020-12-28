import { Body, Controller, Get, Post } from '@nestjs/common';
import Respond from '../respond';
import UserWaitlist from './user-waitlist.entity';
import UserWaitlistService from './user-waitlist.service';

@Controller('user-waitlist')
class UserWaitlistController {
  constructor(private service: UserWaitlistService) {}
  @Get()
  async getUsers() {
    const users = await this.service.getUsers();
    return new Respond(users, 'success', 200);
  }
  @Post()
  async create(@Body() user: UserWaitlist) {
    this.service.saveUser(user);
    const num = await this.service.getUserNum();
    return new Respond({ waitListNum: num }, 'success', 200);
  }
}
export default UserWaitlistController;
