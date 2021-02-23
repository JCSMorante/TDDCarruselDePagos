import { Injectable } from '@angular/core';

interface productoCarrito {
  NombreProducto: string;
  Imagen: string;
  cantidad: number;
}
@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  itemsCart: Array<productoCarrito> = new Array<productoCarrito>();
  constructor() {}

  añadirAlCarrito(producto: productoCarrito) {
    var productoRecuperado = this.itemsCart.find(
      (productoEnCarrito) =>
        productoEnCarrito.NombreProducto == producto.NombreProducto
    );

    if (productoRecuperado === undefined || productoRecuperado === null) {
      this.itemsCart.push(producto);
    } else {
      productoRecuperado.cantidad += 1;
    }
  }
}
