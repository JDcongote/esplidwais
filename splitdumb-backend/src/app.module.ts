import { Module } from '@nestjs/common';
import { AuthzModule } from './authz/authz.module';
import { PrismaService } from './services/prisma.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { HttpModule } from '@nestjs/axios';
import { GroupsController } from './controllers/groups.controller';
import { GroupsService } from './services/groups.service';

@Module({
  imports: [AuthzModule, HttpModule],
  controllers: [UserController, GroupsController],
  providers: [PrismaService, UserService, GroupsService],
})
export class AppModule {}
