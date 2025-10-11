import { IsEmail, IsNotEmpty, IsNumber, IsPositive, Max, MaxLength, Min, MIN, MinLength } from "class-validator";

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
    @Min(18)
    @Max(100)
    @IsPositive()
    age: number;
}
    