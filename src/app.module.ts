import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserWaitlistModule } from './user-waitlist/user-waitlist.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, UserWaitlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
