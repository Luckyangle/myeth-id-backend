import { Module } from '@nestjs/common';
import UserWaitlistService from './user-waitlist.service';
import UserWaitlistController from './user-waitlist.controller';
import UserWaitlist from './user-waitlist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserWaitlist])],
  providers: [UserWaitlistService],
  controllers: [UserWaitlistController],
})
export class UserWaitlistModule {}
