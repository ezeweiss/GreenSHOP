import React from 'react'
import {Box, Text} from '@chakra-ui/react'

function ItemListContainer({saludo}) {
  return (
    <Box textAlign='center'>
        <Text fontSize='3xl'>{saludo}</Text>
    </Box>
  )
}

export default ItemListContainer