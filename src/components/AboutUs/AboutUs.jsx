import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box textAlign="center" mt={20} p={8}>
      <Heading as="h2" size="xl" mb={4}>Sobre Nosotros</Heading>
      <Text fontSize="lg" mb={8}>
        Green Shop es una tienda comprometida con la salud y el bienestar de nuestros clientes.
        Nos especializamos en ofrecer una amplia variedad de alimentos orgánicos y saludables,
        cuidadosamente seleccionados para garantizar la máxima calidad y frescura.
      </Text>
      <Text fontSize="lg">
        Nuestro objetivo es promover un estilo de vida saludable y sostenible, proporcionando
        opciones nutritivas y deliciosas para toda la familia. ¡Únete a nosotros en nuestro
        viaje hacia un mundo más verde y saludable!
      </Text>
    </Box>
  );
}

export default AboutUs;