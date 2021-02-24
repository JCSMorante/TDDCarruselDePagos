import { Injectable } from '@angular/core';

export interface productoCarrito {
  NombreProducto: string;
  Imagen: string;
  cantidad: number;
  valor: number;
  iva: number;
}

export interface factura {
  valorTotal: number;
  ivaTotal: number;
  cantidadProductos: number;
}
@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private productosEnCarrito: Array<productoCarrito> = new Array<productoCarrito>();
  private factura: factura = {
    valorTotal: 0,
    ivaTotal: 0,
    cantidadProductos: 0,
  };
  constructor() {}

  añadirAlCarrito(producto: productoCarrito) {
    var productoRecuperado = this.productosEnCarrito.find(
      (productoEnCarrito) =>
        productoEnCarrito.NombreProducto == producto.NombreProducto
    );

    this.factura.valorTotal += producto.valor;
    this.factura.ivaTotal += producto.iva;
    this.factura.cantidadProductos += producto.cantidad;

    if (productoRecuperado === undefined || productoRecuperado === null) {
      this.productosEnCarrito.push(producto);
    } else {
      productoRecuperado.cantidad += producto.cantidad;
      productoRecuperado.iva += producto.iva;
      productoRecuperado.valor += producto.valor;
    }
  }
  getValorFactura(): number {
    return this.factura.valorTotal;
  }
  getIvaFactura(): number {
    return this.factura.ivaTotal;
  }
  getTotalFactura(): number {
    return this.factura.cantidadProductos;
  }
  getCarrito(): productoCarrito[] {
    return this.productosEnCarrito;
  }
}
