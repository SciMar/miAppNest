import { Injectable, NotFoundException } from '@nestjs/common';
import { IProducts } from 'src/interfaces/IProducts';

@Injectable()
export class ProductsService {
  private products : IProducts [] = [
    { 
      id: 1, 
      name: 'Laptop', 
      price: 1200000, 
      category: "Electronica",
      description: "24 pulgadas"
    },

    { 
      id: 2, 
      name: 'Mouse', 
      price: 20000, 
      category: "Accesorios",
      description: "Inalambrico" 
    }
  ]

  // Obtener todos los productos
  findAll(): IProducts []{
    return this.products;
  }

  // Obtener un producto por ID
  findOne(id: number): IProducts {
    const productFind = this.products.find((product) => product.id === id); // 
    if (!productFind) throw new NotFoundException('Producto no encontrado')
    return productFind;
  } //reto 18 septiembre

  

  // Crear un nuevo producto
  create(product: { name: string; price: number; description: string }) {
    const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1; // Generar nuevo ID
    const newProduct = { id: newId, ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  // Actualizar un producto
  update(id: number, updateData: Partial<{ name: string; price: number; description: string }>) {
    const product = this.findOne(id); // lanzará NotFoundException si no existe
    Object.assign(product, updateData);
    return product;
  }

  // Eliminar un producto
  remove(id: number) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) throw new NotFoundException(`Product with id ${id} not found`);
    return this.products.splice(index, 1)[0];
  }

  // buscar productos por nombre o descripción
search(query: string) {
  const lowerQuery = query.toLowerCase();
  return this.products.filter(
    p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );
}

}
