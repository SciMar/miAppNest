import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService { //Servicio para manejar los usuarios
        
    constructor (
        @InjectRepository(User)
        private usersRepo: Repository<User>
    ) {}

    findAll() {
        return this.usersRepo.find();
    }

    /*findOne(id: number): IUser {
        const userFind = this.users.find((user) => user.id === id)
        if (!userFind) throw new NotFoundException('Usuario no encontrado')
        return userFind
    } //clase 17 septiembre -----------------------------------------------------

    //para agrear un nuevo usuario 
    create(user: Omit<IUser, 'id'>): IUser { //Omit quita el id del tipo IUser
        const newId = this.users.length >0 //Hay usuarios
        ? this.users[this.users.length - 1].id +1  //suma 1 al ultimo id
            :1; //Si no hay usuarios, el id sera 1

        if (user.age && user.age >=18) {
        const newUser:IUser = { 
            id: newId, ...user
            };
            this.users.push(newUser);   
            return newUser;
        }
        throw new BadRequestException('El usuario debe ser mayor a 18 años')
    }

//actualiza un usuario por id
//se busca al usuario por id y se actualiza su informacion(Solo lo que llega en el body)
    update(id: number, newUser: Omit<IUser, 'id'>): IUser { //Omit quita el id del tipo IUser
       const user = this.findOne(id); //busca el usuario por id
       Object.assign(user, newUser); //actualiza el usuario con la nueva informacion
       return user; //retorna el usuario actualizado
    }
    
//elimina un usuario por id
    remove(id: number){ //elimina un usuario por id
        const user = this.users.findIndex((user) => user.id === id); //busca el indice del usuario por id
        this.users.splice(user, 1)
        return {delete: true} //elimina el usuario del array
    }   
  //clase 18 septiembre -----------------------------------------------------*/
}
  
