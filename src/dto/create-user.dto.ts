import { IsEmail, IsNotEmpty, IsNumber, IsOptional, Max, Length, Min} from "class-validator";

export class  CreateUserDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(6, 10, { message: 'La contraseña debe tener entre 6 y 10 caracteres' })
    password: string;
    
    @IsNumber()
    @Min(18, {message: "La edad debe ser mayor o igual a 18"})
    @Max(100)
    @IsOptional()
    age: number;
}
    