import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { RingLoader } from 'react-spinners'
import { db } from '../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const queryRef = doc(db, 'productos', id)

            const response = await getDoc(queryRef)

            const producto = {
                ...response.data(),
                id: response.id
            }
            setProducto(producto)
            setLoading(false)
        }
        getData();
    }, [])

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
