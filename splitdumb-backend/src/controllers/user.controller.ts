import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../Guards/AuthGuard';
import { UserService } from '../services/user.service';
import { Auth0Token, Auth0TokenReturn } from '../decorators/user-id.decorator';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Auth0Token() data: Auth0TokenReturn): Promise<User> {
    return this.userService.getOrCreateUser(data.token, data.id);
  }
}
