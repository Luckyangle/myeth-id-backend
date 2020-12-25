import { Body, Controller, Get, Post } from '@nestjs/common';
import Respond from 'src/Respond';
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
  create(@Body() user: UserWaitlist) {
    this.service.saveUser(user);
    return new Respond(null, 'success', 200);
  }
}
export default UserWaitlistController;
