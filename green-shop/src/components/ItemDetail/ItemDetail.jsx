import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Image, Text, Flex, Badge } from '@chakra-ui/react';

const ItemDetail = ({ nombre, stock, img, descripcion, precio }) => {
    const onAdd = (quantity) => {
        toast.success(`Agregaste ${quantity} unidades al carrito`)
    }

    return (
        <Box maxW="800px" mx="auto" p="4">
            <Flex justify="center" align="center" mt="8">
                <Image src={img} alt={nombre} borderRadius='md' boxSize='300px' objectFit='cover' />
                <Box ml="8">
                    <Text fontSize="3xl" fontWeight="bold" mb="4">{nombre}</Text>
                    <Text fontSize="lg" mb="4" color="gray.600">{descripcion}</Text>
                    <Text fontSize="2xl" fontWeight="bold" mb="4">${precio}</Text>
                    <Badge colorScheme="green" mb="4">{stock} en stock</Badge>
                    <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
                </Box>
            </Flex>
            <ToastContainer />
        </Box>
    );
}

export default ItemDetail;
