import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Box, Image } from '@chakra-ui/react';

const ItemDetail = ({ nombre, stock, img }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidades`)

    }

    return (
        <Box>
            <Image src={img} alt={nombre} w={'300px'}
          h='300px'/>
            Nombre:{nombre}
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
            <ToastContainer />
        </Box>
    )
}

export default ItemDetail
