import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <Flex align='center'>
        <Link to="/cart"><FaShoppingCart /></Link>
        <span>{getQuantity() > 0 && getQuantity() }</span>
    </Flex>
  )
}

export default CartWidget