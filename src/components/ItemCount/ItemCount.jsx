import React, { useContext } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { CartContext } from '../../context/CartContext'; // Importa el contexto del carrito

const ItemCount = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {
  const { stock } = useContext(CartContext); // Consumir el estado del stock desde el contexto

  return (
    <Flex alignItems="center">
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={handleRestar}
        mr={2}
        disabled={cantidad <= 1} 
      >
        -
      </Button>
      <p>{cantidad}</p>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={handleSumar}
        ml={2}
        disabled={cantidad >= stock} 
      >
        +
      </Button>
      <Button
        variant='solid'
        bg={'#243F4D'}
        color={'#fff'}
        ml={2}
        _hover={{ bg: '#3E6478', color: '#fff' }}
        onClick={handleAgregar}
        disabled={cantidad > stock} 
      >
        Agregar al carrito
      </Button>
    </Flex>
  );
};

export default ItemCount;
