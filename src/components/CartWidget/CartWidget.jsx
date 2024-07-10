import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Flex, Link as ChakraLink, Badge} from '@chakra-ui/react';
import { IoCartOutline } from 'react-icons/io5';

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);

  return (
    <Flex>
        <ChakraLink as={Link} to='/cart' fontSize={'2xl'}><IoCartOutline /></ChakraLink>
        <Badge ml="1" colorScheme='none'>{cantidadEnCarrito()}</Badge>
    </Flex>
  )
}

export default CartWidget