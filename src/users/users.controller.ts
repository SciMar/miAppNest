import { Controller, Get, Post, Param, Body, Put, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }
    @Get(':id')
    findOne(@Param('id')id:string){
        return this.usersService.findOne(Number(id))
    }
    @Post()
    create(@Body() user: { name: string; email: string }) {
        return this.usersService.create(user);
    }
    // ✅ PUT para reemplazar datos completos
    @Put(':id')
    update(@Param('id') id: string, @Body() updatedUser: { name?: string; email?: string }) {
        return this.usersService.update(Number(id), updatedUser);
    }

    // ✅ PATCH para actualizar parcialmente (ejemplo: solo email)
    @Patch(':id')
    partialUpdate(@Param('id') id: string, @Body() updatedUser: { name?: string; email?: string }) {
        return this.usersService.update(Number(id), updatedUser);
    }

}
