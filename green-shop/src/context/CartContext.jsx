import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const carritoInicial= JSON.parse(localStorage.getItem('carrito')) || [];

export const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (product,cantidad) => {
    const productoAgregado = {...product, cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find(product => product.id === productoAgregado.id);

    if(estaEnElCarrito){
        estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
    }
    else{
        nuevoCarrito.push(productoAgregado);
    }
    setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
    return carrito.reduce((acc, product) => acc + product.cantidad, 0);
    }

    const precioTotal = () => {
    return carrito.reduce((acc, product) => acc + product.precio * product.cantidad, 0);
    }

    const vaciarCarrito = () => {
    setCarrito([]);
    }

    useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    return (

        <CartContext.Provider value = { {
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;