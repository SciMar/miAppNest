import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from 'src/dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly aunthService: AuthService) {}

    @Post('login')
    login(@Body() data: LoginDTO) {
        return this.aunthService.login(data);
    }
}
