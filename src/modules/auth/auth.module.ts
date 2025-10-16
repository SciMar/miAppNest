import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { ConfigModule } from '@nestjs/config';

// Módulo de Autenticación
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), // Carga las variables de entorno desde el archivo .env
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY, // Clave secreta para firmar los tokens JWT
      signOptions: { 
        expiresIn: process.env.JWT_EXPIRES_IN as unknown as number // se coloca number porque la variable de entorno es string
      },
       // Tiempo de expiración del token
      //arroja error por el formato de la variable de entorno
    })
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController]
})
export class AuthModule {}
