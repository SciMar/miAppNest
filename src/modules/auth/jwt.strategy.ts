// este modulo define la estrategia JWT para la autenticación

import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

// Estrategia JWT para autenticación
@Injectable()
export class JwtStrategy extends PassportStrategy (Strategy, 'jwt') { 
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el token JWT del encabezado de autorización
            ignoreExpiration: false, // No ignora la expiración del token
            secretOrKey: process.env.JWT_SECRET_KEY, // Clave secreta para verificar el token
        });
        console.log (' JWT Strategy cargada con secreto: ', this.configService.get ('JWT_SECRET_KEY'));
    }

    async validate (payload: any) { // Valida el payload del token
        return { 
            userId: payload.sub, 
            email: payload.email 
        }; // Retorna la información del usuario contenida en el payload
    }
}