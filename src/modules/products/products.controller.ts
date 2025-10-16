import { Controller, Get, Post, Param, Body, Put, Delete, Query , UseGuards} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { UpdateProductDTO } from 'src/dto/update-product.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('products') // Ruta base: /products
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // GET /products → Obtener todos los productos
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // Obtener un producto por ID
  @Get(':id')
  encontrarUnoPorId(@Param('id') id: string) {
    return this.productsService.findOne(Number(id));
  }
  //reto 18 septiembre -------------------------------------------------------

  // Crear un nuevo producto
  @UseGuards(JwtAuthGuard) // Aplica la guardia JWT para proteger esta ruta
  @Post()
  crear( @Body() body:CreateProductDTO) {
    return this.productsService.create(body);
  }

  // Actualizar un producto
  @UseGuards(JwtAuthGuard) // Aplica la guardia JWT para proteger esta ruta
  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateProductDTO){
    return this.productsService.update(Number(id), body);
  }
  
  // Eliminar un producto
  @UseGuards(JwtAuthGuard) // Aplica la guardia JWT para proteger esta ruta
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(Number(id));
  }
}

