import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from 'src/dto/login.dto';
import { User } from 'src/entities/user.entity';
import { CreateUserDTO } from 'src/dto/create-user.dto';

// Servicio de Autenticación
@Injectable() // Decorador que marca la clase como un proveedor inyectable

export class AuthService {
    
    constructor( //constructor para inyectar dependencias
        @InjectRepository (User) // Inyecta el repositorio de la entidad User
        private userRepo: Repository<User>, // Repositorio para interactuar con la entidad User
        private jwtService: JwtService,     // Servicio para manejar JWT
    ) {} 

    // Función asíncrona para registrar un nuevo usuario
    async register (data: CreateUserDTO) {
        const hashedPassword = await bcrypt.hash (data.password, 10);
        const userCreated = this.userRepo.create ({ ...data, password: hashedPassword}); //El hash sirve para encriptar la contraseña
        await this.userRepo.save(userCreated);
        return {message : 'Usuario registrado correctamente', user : {
            id: userCreated.id, 
            email: userCreated.email
        }
    }}
    // Función asíncrona para iniciar sesión
    async login (data: LoginDTO) {

        const user = await this.userRepo.findOne({where: {email: data.email}})
        //verifica si el usuario existe
        if (!user) {
            throw new UnauthorizedException('Credenciales invalidas-EMAIL');
        }
        //compara la contraseña ingresada con la almacenada
        const isPasswordValid = await bcrypt.compare(data.password, user.password);

        // si la contraseña no es válida, lanza una excepción
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales invalidas-PASSWORD');
        }

        // Si las credenciales son válidas, genera un token JWT
        //const payload = { sub: user.id, email: user.email }; // Información que se incluirá en el token
        //const accessToken = this.jwtService.sign(payload); // Genera el token JWT
        // Retorna el usuario y el token de acceso

        const payloadToken = { 
                sub: user.id, 
                name: user.name, 
                email: user.email, 
            }; // Información que se incluirá en el token
        const token = await this.jwtService.signAsync(payloadToken); // Genera el token JWT
        return {
            accessToken: token // Retorna el token de acceso
        };

    }
}

