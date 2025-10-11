import { IsEmail, IsNotEmpty, Max, MaxLength, MinLength } from "class-validator";

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

    age: number;
}
    