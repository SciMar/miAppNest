import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { UpdateProductDTO } from 'src/dto/update-product.dto';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  
  constructor (
    @InjectRepository(Product)
    private productsRepo: Repository<Product>
  ) {}

  // Obtener todos los productos
  findAll() {
    return this.productsRepo.find();
  }

  // Obtener un producto por ID
  async findOne(id: number) {
    const productFind = await this.productsRepo.findOne ({where:{id}})
    if (!productFind) throw new NotFoundException('Producto no encontrado')
    return productFind;
  } //reto 18 septiembre

  //para agrear un nuevo producto 
  create(newProduct: CreateProductDTO) {
    const productCreated = this.productsRepo.create (newProduct)
    return this.productsRepo.save(productCreated);
  }

  // Actualizar un producto
  async update(id: number, updateProduct: UpdateProductDTO) { 
        await this.productsRepo.update(id, updateProduct)
          return this.findOne(id);
      }

  // Eliminar un producto
  async remove(id: number) { 
    const result = await this.productsRepo.delete(id)
    if (result.affected === 0) throw new NotFoundException('Producto no encontrado')
      return {delete:true} //verifica si el producto existe
      } 
}
