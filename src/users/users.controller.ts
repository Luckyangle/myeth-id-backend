import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import Respond from '../Respond';
import User from './user.entity';
import UsersService from './users.service';

@Controller('users')
class UsersController {
  constructor(private service: UsersService) {}
  @Get()
  getUsers() {
    const users = this.service.getUsers();
    return new Respond(users, 'success', 200);
  }
  @Get(':id')
  getUser(@Param() params) {
    const user = this.service.getUser(params.id);
    return new Respond(user, 'success', 200);
  }
  @Post()
  create(@Body() user: User) {
    this.service.saveUser(user);
    return new Respond(null, 'success', 200);
  }
  @Put()
  update(@Body() user: User) {
    this.service.updateUser(user);
    return new Respond(null, 'success', 200);
  }
}
export default UsersController;
