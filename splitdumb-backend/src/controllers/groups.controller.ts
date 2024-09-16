import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../Guards/AuthGuard';
import { Auth0Token, Auth0TokenReturn } from '../decorators/user-id.decorator';
import { Group } from '@prisma/client';
import { GroupsService } from '@/services/groups.service';
import { CreateGroupDialogRequest } from '@/types';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createGroup(
    @Auth0Token() authData: Auth0TokenReturn,
    @Body() data: CreateGroupDialogRequest,
  ): Promise<Group> {
    return this.groupsService.createGroup(authData.id, data);
  }
}
