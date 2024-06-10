import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/mockData'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { RingLoader } from 'react-spinners'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(id)
            .then((product) => {
                setProducto(product)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error al obtener el producto:", error)
                setLoading(false)
            })
    }, [id])

    return (
        <>
            {loading ? 
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                    <RingLoader color="#36d7b7" />
                </Flex>
                : 
                <ItemDetail {...producto} />
            }
        </>
    )
}

export default ItemDetailContainer
