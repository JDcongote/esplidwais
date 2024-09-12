import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    console.log('Constructing JwtStrategy');
    console.log('AUTH0_ISSUER_URL:', process.env.AUTH0_ISSUER_URL);
    console.log('AUTH0_AUDIENCE:', process.env.AUTH0_AUDIENCE);
    console.log(
      'jwksUri:',
      `${process.env.AUTH0_ISSUER_URL}/.well-known/jwks.json`,
    );
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_ISSUER_URL}.well-known/jwks.json`,

        handleSigningKeyError: (err, cb) => {
          console.error('Error getting signing key:', err);
          return cb(err);
        },
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `${process.env.AUTH0_ISSUER_URL}`,
      algorithms: ['RS256'],
    });
  }

  validate(payload: unknown): unknown {
    console.log('Received payload:', JSON.stringify(payload, null, 2));
    console.log('Expected audience:', process.env.AUTH0_AUDIENCE);
    console.log('Expected issuer:', process.env.AUTH0_ISSUER_URL);
    return payload;
  }
}
