import { Injectable, NotFoundException } from '@nestjs/common';

export type IUser = { id: number; name: string; email: string };

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
    create(user: { name: string; email: string }): IUser {
        const newUser = {
            id: this.users.length + 1,
            ...user,
        };
        this.users.push(newUser);
        return newUser;
    }

//se busca al usuario por id y se actualiza su informacion(Solo lo que llega en el body)
    update(id: number, updatedUser: { name?: string; email?: string }) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        throw new NotFoundException('Usuario no encontrado');
    }

    this.users[userIndex] = {
        ...this.users[userIndex],
        ...updatedUser,
    };

    return this.users[userIndex];
    }
}
