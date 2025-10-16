import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from 'src/dto/login.dto';
import { CreateUserDTO } from 'src/dto/create-user.dto';

// Controlador de Autenticación

// http://localhost:3000/auth/login
@Controller('auth')
export class AuthController {
    constructor(private readonly aunthService: AuthService) {}

    //register
    @Post('register')
    register(@Body() data: CreateUserDTO) {
        return this.aunthService.register(data);
    }

    //login
    @Post('login')
    login(@Body() data: LoginDTO) {
        return this.aunthService.login(data);
    }
}
