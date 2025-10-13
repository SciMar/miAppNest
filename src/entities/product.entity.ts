import {PrimaryGeneratedColumn, Column, Entity} from "typeorm";

@Entity()

export class Product {
    @PrimaryGeneratedColumn() //decorador que marca la propiedad como clave primaria      
    id: number; 

    @Column({nullable: false})
    name: string; 

    @Column({nullable: false})
    price: number; 

    @Column({nullable: true}) 
    category: string;

    @Column({nullable: false})
    description: string 
};