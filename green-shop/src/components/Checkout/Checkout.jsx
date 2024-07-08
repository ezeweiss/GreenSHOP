import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState('');

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, 'pedidos');

    addDoc(pedidosRef, pedido).then((resp) => {
      console.log(resp.id);
      setPedidoId(resp.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <Box className='container' p={4} boxShadow='lg' borderRadius='md'>
        <Heading as='h1' size='xl' mb={4}>
          Gracias por tu compra
        </Heading>
        <Text fontSize='lg'>
          El id de tu pedido es: {pedidoId}
        </Text>
      </Box>
    );
  }

  return (
    <Box maxW='800px' mx='auto' p={4} boxShadow='lg' borderRadius='md'>
      <Heading as='h1' size='xl' mb={4}>
        Finalizar Compra
      </Heading>
      <form onSubmit={handleSubmit(comprar)}>
        <FormControl id='nombre' mb={4} isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            type='text'
            placeholder='Nombre'
            {...register('nombre', { required: true })}
          />
        </FormControl>
        <FormControl id='email' mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            placeholder='Email'
            {...register('email', { required: true })}
          />
        </FormControl>
        <FormControl id='telefono' mb={4} isRequired>
          <FormLabel>Teléfono</FormLabel>
          <Input
            type='phone'
            placeholder='Teléfono'
            {...register('telefono', { required: true })}
          />
        </FormControl>
        <Button type='submit' colorScheme='teal' size='md'>
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Checkout;
