import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDTO } from 'src/dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository (User)
        private userRepo: Repository<User>
    ) {}

    async login (data: LoginDTO) {

        const user = await this.userRepo.findOne({where: {email: data.email}});

        if (!user) {
            throw new UnauthorizedException('Credenciales invalidas-EMAIL');
        }
        const isPasswordValid = (data.password === user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales invalidas-PASSWORD');
        }
        return {
            user: { 
                id: user.id, 
                name: user.name, 
                email: user.email, 
                age: user.age
            },
            accessToken: `fake-jwt-token-${user.id}-${Date.now()}`
        };

    }

}
