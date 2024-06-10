import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Flex } from "@chakra-ui/react";

function CartWidget() {
  return (
    <Flex align='center'>
        <FaShoppingCart />
        <Badge ml="1" colorScheme='none'>0</Badge>
    </Flex>
  )
}

export default CartWidget