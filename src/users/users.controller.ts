import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import User from './user.entity';
import UsersService from './users.service';

@Controller('users')
class UsersController {
  constructor(private service: UsersService) {}
  @Get()
  getUsers() {
    return this.service.getUsers();
  }
  @Get(':id')
  getUser(@Param() params) {
    return this.service.getUser(params.id);
  }
  @Post()
  create(@Body() user: User) {
    return this.service.saveUser(user);
  }
  @Put()
  update(@Body() user: User) {
    return this.service.updateUser(user);
  }
}
export default UsersController;
