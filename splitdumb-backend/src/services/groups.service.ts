import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Group } from '@prisma/client';
import { v4 } from 'uuid';
import { CreateGroupDialogRequest } from 'src/types';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async getAllGroups(userId: string): Promise<Group[]> {
    return this.prisma.group.findMany({
      where: {
        members: { some: { id: userId } },
      },
    });
  }

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
      type: data.type,
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
