import React, { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';

const ItemCount = ({ stock, valorInicial, onAdd, updateTotalItems }) => {
    const [count, setCount] = useState(valorInicial);

    const incrementar = () => {
        count < stock && setCount(count + 1);
    };

    const decrementar = () => {
        count > valorInicial && setCount(count - 1);
    };

    const agregarAlCarrito = () => {
        onAdd(count); // Llama a la función proporcionada por el componente padre para agregar al carrito
    };

    return (
        <Flex>
            <Button colorScheme='blue' onClick={decrementar}>-</Button>
            {count}
            <Button colorScheme='blue' onClick={incrementar}>+</Button>
            <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </Flex>
    );
};

export default ItemCount;
