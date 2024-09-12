import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    console.log('JwtAuthGuard.canActivate called');
    return super.canActivate(context);
  }

  handleRequest(err, user, info, context) {
    console.log('JwtAuthGuard.handleRequest called');
    console.log('Error:', err);
    console.log('User:', user);
    console.log('Info:', info);
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
