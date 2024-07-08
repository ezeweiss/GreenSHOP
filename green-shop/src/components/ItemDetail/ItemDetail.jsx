import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Image, Text, Flex, Badge, Button, Heading, Stack } from '@chakra-ui/react';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { agregarAlCarrito } = useContext(CartContext);

  const handleRestar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    if (cantidad < producto.stock) setCantidad(cantidad + 1);
  };

  return (
    <Box maxW="800px" mx="auto" p="4">
      <Flex justify="center" align="center" mt="8">
        <Image
          src={producto.img}
          alt={producto.nombre}
          boxSize='400px'
          objectFit='cover'
          borderRadius='md'
        />
        <Stack ml="8" spacing="4">
          <Heading size="md">
            {producto.nombre}
          </Heading>
          <Badge ml="1" colorScheme='none'>
            {producto.categoria}
          </Badge>
          <Text fontSize="2xl" fontWeight="bold">
            ${producto.precio}
          </Text>
          <Text fontSize='lg'>
            {producto.descripcion}
          </Text>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(producto, cantidad);
              toast.success('Producto agregado al carrito');
            }}
          />
          <ToastContainer />
        </Stack>
      </Flex>
    </Box>
  );
};

export default ItemDetail;
