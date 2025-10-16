import { Controller, Post, Body, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from 'src/dto/login.dto';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { JwtAuthGuard } from './jwt.guard';

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

    //profile
    // Ruta protegida para obtener el perfil del usuario autenticado
    // http://localhost:3000/auth/profile
    // Requiere un token JWT válido en el encabezado de autorización
    @UseGuards(JwtAuthGuard) // Aplica la guardia JWT para proteger esta ruta
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
