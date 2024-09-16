import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface Auth0TokenReturn {
  token: string;
  id: string;
}

export const Auth0Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Auth0TokenReturn => {
    const request = ctx.switchToHttp().getRequest();

    return {
      token: request.headers.authorization,
      id: request.user.accessToken.sub,
    };
  },
);
