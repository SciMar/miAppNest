import { Controller, Get, Post, Param, Body, Put, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {} 
    
    //inyeccion de dependencia

    @Get() //todos los usuarios
    findAll() { //metodo del servicio
    return this.usersService.findAll();
    }

    //✅ GET para obtener un usuario por ID (lee)
    @Get(':id') //un usuario por id
    findOne(@Param('id')id:string){ //el id viene como string
        return this.usersService.findOne(Number(id)) //se convierte a numero
    } //clase 17 septiembre -----------------------------------------------------

    // ✅ POST para crear un nuevo usuario (crea)
    @Post() 
    create(@Body() body:CreateUserDTO) { //Omit quita el id del tipo IUser
        return this.usersService.create(body); //el body tiene el usuario sin id
    }

    // ✅ PUT para actualizar completamente un usuario (ejemplo: nombre y email)
    @Put(':id')
    update(@Param('id') id: string, @Body() body: UpdateUserDTO){ //Omit quita el id del tipo IUser
        return this.usersService.update(Number(id), body);
        //el body tiene el usuario sin id
    }

    // ✅ DELETE para eliminar un usuario por ID (elimina)
    @Delete(':id') 
    remove (@Param('id') id: string) { //el id viene como string
        return this.usersService.remove(Number(id));
    }
}
