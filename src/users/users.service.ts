import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from 'src/interfaces/IUser';


@Injectable()
export class UsersService {
    private users: IUser [] = [
        { id: 1, name: 'Marcela', email: 'marce@gmail.com'},
        { id: 2, name: 'Ana', email: 'marce@gmail.com' }
    ]
        
    findAll(): IUser[] {
        return this.users;
    }
    findOne(id:number): IUser {
        const userFind = this.users.find((user) => user.id === id)
        if (!userFind) throw new NotFoundException ('Usuario no encontrado')
            return userFind;
    }
//para agrear un nuevo usuario 
    create(user: Omit<IUser, 'id'>): IUser { //Omit quita el id del tipo IUser
        const newId = this.users.length >0 //Hay usuarios
        ? this.users[this.users.length - 1].id +1  //suma 1 al ultimo id
            :1; //Si no hay usuarios, el id sera 1

        const newUser:IUser = { 
            id: newId, ...user
        };
        
        this.users.push(newUser);   
        return newUser;
    }

//se busca al usuario por id y se actualiza su informacion(Solo lo que llega en el body)
    update(id: number, newUser: Omit<IUser, 'id'>): IUser { //Omit quita el id del tipo IUser
        const user = this.findOne(id); //busca el usuario por id
        Object.assign(user, newUser); //actualiza el usuario con la nueva informacion
        return user; //retorna el usuario actualizado
    }

    remove(id: number){
        const user = this.users.findIndex((user) => user.id === id);
        this.users.splice(user, 1);
        return { delete: true }
    }    
}
