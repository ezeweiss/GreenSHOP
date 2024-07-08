import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Stack,
} from '@chakra-ui/react';

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <Box
        maxW='800px'
        mx='auto'
        p={4}
        boxShadow='lg'
        borderRadius='md'
    >
      <Heading
        as='h1'
        size='xl'
        mb={4}
        >
        Carrito
      </Heading>
      {carrito.length > 0 ? (
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Producto</Th>
              <Th>Precio unitario</Th>
              <Th>Cantidad</Th>
              <Th>Precio total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {carrito.map((producto) => (
              <Tr key={producto.id}>
                <Td>{producto.nombre}</Td>
                <Td>${producto.precio}</Td>
                <Td>{producto.cantidad}</Td>
                <Td>${producto.precio * producto.cantidad}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Heading as='h2' size='md'>
          El carrito está vacío
        </Heading>
      )}
      {carrito.length > 0 && (
        <Stack
            mt={4}
            spacing={4}
            justifyContent="center"
            align="center"
        >
          <Divider />
          <Heading 
            as='h2' 
            size='md'>
            Precio total: ${precioTotal()}
          </Heading>
          <Button
            size="sm"
            colorScheme='red'
            onClick={handleVaciar}>
            Vaciar carrito
          </Button>
          <Button 
            as={Link}
            to='/checkout'
            size="sm"
            variant='solid' 
            bg={'#243F4D'} 
            color={'#fff'}
            _hover={{ bg: '#3E6478', color: '#fff' }}
            >
            Finalizar compra
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;

