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
  Flex,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  const tableSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box maxW='800px' mx='auto' p={4} boxShadow='lg' borderRadius='md'>
      <Heading as='h1' size='xl' mb={4}>
        Carrito
      </Heading>
      {carrito.length > 0 ? (
        <Table variant='simple' size={tableSize}>
          <Thead>
            <Tr>
              <Th>Producto</Th>
              <Th isNumeric>Precio unitario</Th>
              <Th isNumeric>Cantidad</Th>
              <Th isNumeric>Precio total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {carrito.map((producto) => (
              <Tr key={producto.id}>
                <Td>{producto.nombre}</Td>
                <Td isNumeric>${producto.precio}</Td>
                <Td isNumeric>{producto.cantidad}</Td>
                <Td isNumeric>${producto.precio * producto.cantidad}</Td>
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
        <Stack mt={4} spacing={4} align='center'>
          <Divider />
          <Heading as='h2' size='md'>
            Precio total: ${precioTotal()}
          </Heading>
          <Flex justify='center' align='center' mt={4}>
            <Button
              size='md'
              width='200px'
              mr={2}
              colorScheme='red'
              onClick={handleVaciar}
            >
              Vaciar carrito
            </Button>
            <Button
              as={Link}
              to='/checkout'
              size='md'
              width='200px'
              variant='solid'
              bg={'#243F4D'}
              color={'#fff'}
              _hover={{ bg: '#3E6478', color: '#fff' }}
            >
              Finalizar compra
            </Button>
          </Flex>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
