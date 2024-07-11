import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { getDocs } from 'firebase/firestore';
import { collection, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';

const ItemListContainer = ({ title, texto }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaTexto, setCategoriaTexto] = useState('');

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const coleccion = collection(db, 'productos');
      const queryRef = !categoriaId
        ? coleccion
        : query(coleccion, where('categoria', '==', categoriaId));

      const response = await getDocs(queryRef);
      console.log(response);

      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id,
        };
        return newItem;
      });
      setProducts(productos);
      setLoading(false);
    };

    if (categoriaId) {
      setCategoriaTexto( `${categoriaId}`);
    } else {
      setCategoriaTexto('');
    }

    getData();
  }, [categoriaId]);

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <Heading color={'black'} mt={10}>{title}</Heading>
      {categoriaTexto && (
        <Heading color="black" mt={2}>
          {categoriaTexto}
        </Heading>
      )}
      {loading ? (
        <Flex justify={'center'} align={'center'} h={'50vh'}>
          <RingLoader color="#36d7b7" />
        </Flex>
      ) : (
        <ItemList products={products} texto={texto} />
      )}
    </Flex>
  );
};

export default ItemListContainer;
