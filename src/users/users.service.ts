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
}
