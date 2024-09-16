import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Group } from '@prisma/client';
import { v4 } from 'uuid';
import { CreateGroupDialogRequest } from '@/types';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}
  async createGroup(
    userId: string,
    data: CreateGroupDialogRequest,
  ): Promise<Group> {
    const group: Group = {
      id: v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      name: data.name,
      ownerId: userId,
      picture: data.picture,
      type: 'test',
    };
    const createdGroup = await this.prisma.group.create({
      data: {
        ...group,
        members: {
          connect: [userId].map((id) => ({ id })),
        },
      },
      include: {
        members: true,
      },
    });
    return createdGroup;
  }
}
