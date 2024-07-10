import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Box, Button, FormControl, FormLabel, Input, Heading, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState('');
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (pedidoId) {
      swal.fire({
        title: "Gracias por tu compra",
        text: `El id de tu pedido es: ${pedidoId}`,
        icon: "success",
        confirmButtonText: "Aceptar"
      }).then(() => {
        navigate('/');
      });
    }
  }, [pedidoId, navigate]);


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
        <Flex justify="center">
          <Button
            type='submit'
            colorScheme='teal'
            size='md'
            variant='solid'
            bg={'#243F4D'}
            color={'#fff'}
            _hover={{ bg: '#3E6478', color: '#fff' }}
            >
            Enviar
          </Button>
        </Flex>  
      </form>
    </Box>
  );
};

export default Checkout;
