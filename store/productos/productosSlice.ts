import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Producto = {
    imgURL:string,
    nombre:string,
    precio:number,
    cantidad:number
}

interface ProductosState{
    cantidadProductos:number,
    productosCarrito:Producto[]
}

const initialState: ProductosState = {
    cantidadProductos:0,
    productosCarrito:[]
}

const productosSlice = createSlice({
  name: 'productos',
  initialState,
  reducers: {
    agregarProducto(state,action:PayloadAction<Producto>){
        const producto = action.payload;
        const index = state.productosCarrito.findIndex(p=>p.nombre === producto.nombre)

        if(index !== -1){
            state.productosCarrito[index].cantidad += producto.cantidad
        }else{
            state.productosCarrito.push(producto)
        }
        state.cantidadProductos++
    },

    eliminarProducto(state,action:PayloadAction<string>){
        const productoNombre = action.payload;
        const index = state.productosCarrito.findIndex(p=>p.nombre === productoNombre);

        if (index !== -1) {
            state.cantidadProductos -= state.productosCarrito[index].cantidad;
            state.productosCarrito.splice(index, 1);
        }
    }

  }
});

export const { agregarProducto, eliminarProducto } = productosSlice.actions;


export default productosSlice.reducer