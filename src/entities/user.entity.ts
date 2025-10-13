import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// Definición de la entidad User
@Entity() //decorador que marca la clase como una entidad de base de datos

export class User {
    @PrimaryGeneratedColumn() //decorador que marca la propiedad como clave primaria      
    id: number; 

    @Column({nullable: false}) //decorador que marca la propiedad como columna de la tabla
    name: string; 

    @Column({nullable: false, unique: true})
    email: string;

    @Column({nullable: false}) 
    password:string;

    @Column({nullable: true}) 
    age?: number
}