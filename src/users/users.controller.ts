import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import Token from 'src/token';
import { Daofi } from 'src/token.config';
import Respond from '../respond';
import User, { UserStatus } from './user.entity';
import UsersService from './users.service';

@Controller('users')
class UsersController {
  constructor(private service: UsersService) {}
  /**
   * Creat user in waitlist and return num of waitlist
   * @param {string} address
   * @param {User} vo
   */
  @Post()
  async createOne(@Body() vo: User) {
    try {
      const token = new Token(
        Daofi.Network,
        Daofi.Address,
        Daofi.Abi,
        Daofi.Precision,
      );
      const balance = await token.queryBalance(vo.address);
      if (balance >= Daofi.MinToken) {
        const user = new User();
        user.address = vo.address;
        user.twitter = vo.twitter;
        await this.service.saveUser(user);
        const users = await this.service.getUsersBystatus(UserStatus.WAIT);
        return new Respond({ waitListNum: users.length }, HttpStatus.OK, 'ok');
      } else {
        return new Respond(
          null,
          HttpStatus.UNAUTHORIZED,
          'You dont have enough token and unauthorized',
        );
      }
    } catch (error) {
      return new Respond(
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Inernal server error',
      );
    }
  }

  /**
   * Find user by myeth_id
   * @param {User} vo
   */
  @Get(':id')
  async findOne(@Param('address') address: string, @Param('id') id: string) {
    try {
      const token = new Token(
        Daofi.Network,
        Daofi.Address,
        Daofi.Abi,
        Daofi.Precision,
      );
      const user = await this.service.getUserByMyethID(id);
      const balance = await token.queryBalance(user.address);
      if (balance >= Daofi.MinToken) {
        return new Respond(user, HttpStatus.OK, 'ok');
      } else {
        return new Respond(
          null,
          HttpStatus.UNAUTHORIZED,
          'You dont have enough token and unauthorized',
        );
      }
    } catch (error) {
      return new Respond(
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Inernal server error',
      );
    }
  }

  /**
   * Update user
   * @param {User} vo
   */
  async updateOne(@Body() vo: User) {
    try {
      const token = new Token(
        Daofi.Network,
        Daofi.Address,
        Daofi.Abi,
        Daofi.Precision,
      );
      const balance = await token.queryBalance(vo.address);
      if (balance >= Daofi.MinToken) {
        const user = new User();
        user.myeth_id = vo.myeth_id;
        user.address = vo.address;
        user.name = vo.name;
        user.pic = vo.pic;
        user.telegram = vo.telegram;
        user.twitter = vo.twitter;
        user.background = vo.background;
        user.color = vo.color;
        user.status = vo.status;
        await this.service.updateUser(user);
        return new Respond(null, HttpStatus.OK, 'ok');
      } else {
        return new Respond(
          null,
          HttpStatus.UNAUTHORIZED,
          'You dont have enough token and unauthorized',
        );
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
export default UsersController;
