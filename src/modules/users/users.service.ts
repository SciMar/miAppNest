import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
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

    async findOne(id: number) {
        const userFind = await this.usersRepo.findOne ({where:{id}})
        if (!userFind) throw new NotFoundException('Usuario no encontrado')
        return userFind
    }

    //para agrear un nuevo usuario 
    create(newUser:CreateUserDTO) {
        const userCreated = this.usersRepo.create (newUser)
            return this.usersRepo.save(userCreated);
        }

    //actualiza un usuario por id
    async update(id: number, UpdateUser: UpdateUserDTO) {
        await this.usersRepo.update(id, UpdateUser)
            return this.findOne(id);
        }
    
    //elimina un usuario por id
    async remove(id: number){ //elimina un usuario por id
        const result = await this.usersRepo.delete(id); 
        if (result.affected === 0) throw new NotFoundException('Usuario no encontrado')
        return {delete: true} //elimina el usuario del array
    }   
}
  
