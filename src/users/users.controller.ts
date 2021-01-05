import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import Respond from '../respond';
import User, { UserStatus } from './user.entity';
import UsersService from './users.service';

@Controller('users')
class UsersController {
  constructor(private service: UsersService) {}
  /**
   * Creat user in waitlist and return num of waitlist
   * @param {User} vo 
   */
  @Post()
  async create(@Body() vo: User) {
    try {
      let user = new User();
      user.address = vo.address;
      user.twitter = vo.twitter;
      await this.service.saveUser(user);
      const users = await this.service.getUsersBystatus(UserStatus.WAIT);
      return new Respond({ waitListNum: users.length }, HttpStatus.OK);
    } catch (error) {
      return new Respond(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * Find user by myeth_id
   * @param {User} vo 
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return new Respond(await this.service.getUserByMyethID(id), HttpStatus.OK);
    } catch (error) {
      return new Respond(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * Find users
   * @param {User} vo 
   */
  @Get()
  async findAll() {
    try {
      return new Respond(await this.service.getUsers(), HttpStatus.OK);
    } catch (error) {
      return new Respond(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * Update user
   * @param {User} vo 
   */
  async updateOne(@Body() vo: User){
    try {
      let user = new User();
      user.myeth_id=vo.myeth_id;
      user.address = vo.address;
      user.name=vo.name;
      user.pic=vo.pic;
      user.telegram=vo.telegram;
      user.twitter = vo.twitter;
      user.background=vo.background;
      user.color=vo.color;
      user.status=vo.status;
      await this.service.updateUser(user);
      return new Respond(null, HttpStatus.OK);
    } catch (error) {
      return new Respond(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
export default UsersController;
