import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

const ItemCount = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {
  return (
    <Flex alignItems="center">
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={handleRestar}
        mr={2}
      >
        -
      </Button>
      <p>{cantidad}</p>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={handleSumar}
        ml={2}
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
      >
        Agregar al carrito
      </Button>
    </Flex>
  );
};

export default ItemCount;
