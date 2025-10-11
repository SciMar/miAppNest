import { IsNotEmpty, IsString, IsNumber, MaxLength} from 'class-validator';

export class CreateProductDTO { 
    
    @IsNotEmpty()
    name: string; 

    @IsNotEmpty()
    @IsNumber()
    price: number; 

    @MaxLength(10)
    category: string;

    description: string 
};