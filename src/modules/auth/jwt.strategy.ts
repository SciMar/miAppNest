import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

// Estrategia JWT para autenticación
@Injectable()
export class JwtStrategy extends PassportStrategy (Strategy) { 
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el token JWT del encabezado de autorización
            ignoreExpiration: false, // No ignora la expiración del token
            secretOrPrivateKey: process.env.JWT_SECRET_KEY, // Clave secreta para verificar el token
        });
    }

    async validate (payload: any) { // Valida el payload del token
        return { 
            userId: payload.sub, 
            email: payload.email 
        }; // Retorna la información del usuario contenida en el payload
    }
}