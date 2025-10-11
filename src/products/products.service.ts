import { Injectable, NotFoundException } from '@nestjs/common';
import { IProducts } from 'src/interfaces';

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

  //para agrear un nuevo producto 
      create(product: Omit<IProducts, 'id'>): IProducts { //Omit quita el id del tipo IProducts
          const newId = this.products.length >0 //Hay productos
          ? this.products[this.products.length - 1].id +1  //suma 1 al ultimo id
              :1; //Si no hay productos, el id sera 1
  
          const newProduct:IProducts = { 
              id: newId, ...product
          };
          this.products.push(newProduct);   
          return newProduct;
      }

  // Actualizar un producto
   update(id: number, newProduct: Omit<IProducts, 'id'>): IProducts { 
         const product = this.findOne(id); 
         Object.assign(product, newProduct); 
         return product;
      }

  // Eliminar un producto
   remove(id: number){ 
        const product = this.products.findIndex((product) => product.id === id);
        this.products.splice(product, 1)
        return {delete: true} 
      } 

}
