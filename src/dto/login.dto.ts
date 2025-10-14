import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class LoginDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Length(6, 10, { message: 'La contraseña debe tener entre 6 y 10 caracteres' })
    password: string;
}