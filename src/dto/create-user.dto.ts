import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, Max, MaxLength, Min, MinLength } from "class-validator";

export class  CreateUserDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(10)
    password: string;
    
    @IsNumber()
    @Min(0, {message: "La edad debes ser mayor o igual a 0"})
    @Max(100)
    @IsOptional()
    age: number;
}
    