import { Controller, Get, Post, Param, Body, Put, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

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
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(Number(id));
  }

  // Crear un nuevo producto
  @Post()
  create(
    @Body() product: { name: string; price: number; description: string }
  ) {
    return this.productsService.create(product);
  }

  // Actualizar un producto
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<{ name: string; price: number; description: string }>
  ) {
    return this.productsService.update(Number(id), updateData);
  }

  // Eliminar un producto
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(Number(id));
  }

  // GET /products/search?q=... → Buscar productos por nombre o descripción

  @Get('search')
  search(@Query('q') query: string) {
    return this.productsService.search(query);
}

}

