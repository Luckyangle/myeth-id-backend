import { Body, Controller, Get, Post } from '@nestjs/common';
import UserWaitlist from './user-waitlist.entity';
import UserWaitlistService from './user-waitlist.service';

@Controller('user-waitlist')
class UserWaitlistController {
  constructor(private service: UserWaitlistService) {}
  @Get()
  getUsers() {
    return this.service.getUsers();
  }
  @Post()
  create(@Body() user: UserWaitlist) {
    return this.service.saveUser(user);
  }
}
export default UserWaitlistController;
