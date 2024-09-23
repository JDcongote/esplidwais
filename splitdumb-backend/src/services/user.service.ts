import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Auth0User } from 'src/authz/types';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async getOrCreateUser(accessToken: string, id?: string): Promise<User> {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (existingUser) {
      return existingUser;
    }
    const data = await this.getUserInfo(accessToken);
    const user: User = {
      email: data.email,
      id: data.sub,
      name: data.name,
    };
    return this.prisma.user.create({
      data: user,
    });
  }

  async getUserInfo(accessToken: string): Promise<Auth0User> {
    const url = `${process.env.AUTH0_ISSUER_URL}userinfo`;

    try {
      const response = await lastValueFrom(
        this.httpService.get(url, {
          headers: {
            Authorization: accessToken,
          },
        }),
      );

      return response.data;
    } catch (error) {
      throw new Error('Error fetching user info: ' + error.message);
    }
  }
}
