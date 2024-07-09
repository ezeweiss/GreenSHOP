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
      <Flex direction={{ base: 'column', md: 'row' }} justify="center" align="center" mt="8">
        {/* Imagen del producto */}
        <Image
          src={producto.img}
          alt={producto.nombre}
          boxSize={{ base: '250px', md: '400px' }}
          objectFit='cover'
          borderRadius='md'
          mb={{ base: '4', md: '0' }} // Margen inferior solo en pantallas pequeñas
        />
        {/* Detalles del producto */}
        <Stack ml={{ base: '0', md: '8' }} mt={{ base: '4', md: '0' }} spacing="4" align="center">
          <Heading size="md" textAlign="center">
            {producto.nombre}
          </Heading>
          <Badge colorScheme='none'>
            {producto.categoria}
          </Badge>
          <Text fontSize="2xl" fontWeight="bold">
            ${producto.precio}
          </Text>
          <Text fontSize='lg' textAlign="center">
            {producto.descripcion}
          </Text>
          {/* Componente ItemCount */}
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
