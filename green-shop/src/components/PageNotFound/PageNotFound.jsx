import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const PageNotFound = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading as="h1" size="xl" mb={4}>Error 404 - Página no encontrada</Heading>
      <Text fontSize="lg" mb={4}>Lo sentimos, la página que estás buscando no se ha encontrado.</Text>
      <Text fontSize="lg" mb={8}>¿Qué puedes hacer ahora?</Text>
      <Button as={Link} to="/" colorScheme="blue" mr={4}>Volver a la página de inicio</Button>
      <Button as={Link} to="/contacto" colorScheme="teal">Contactar al soporte</Button>
    </Box>
  );
}

export default PageNotFound;
