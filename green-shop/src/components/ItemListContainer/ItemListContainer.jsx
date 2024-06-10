import { Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../data/mockData';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = categoria ? getProductsByCategory : getProducts;
    
    fetchProducts(categoria)
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setLoading(false);
      });
  }, [categoria]);

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <Heading color={'#B6FCD7'} mt={10}>{categoria ? `Categoría: ${categoria}` : title}</Heading>
      {loading ? (
        <Flex justify={'center'} align={'center'} h={'50vh'}>
          <RingLoader color="#36d7b7" />
        </Flex>
      ) : (
        <ItemList products={products} />
      )}
    </Flex>
  );
};

export default ItemListContainer;

