import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box textAlign="center" mt={20} p={8}>
      <Heading as="h2" size="xl" mb={4}>Contacto</Heading>
      <Text fontSize="lg" mb={8}>
        ¿Tienes alguna pregunta o comentario? No dudes en ponerte en contacto con nosotros.
        Estamos aquí para ayudarte.
      </Text>
      <Text fontSize="lg" mb={4}>
        Correo electrónico: <Link href="mailto:info@greenshop.com">info@greenshop.com</Link>
      </Text>
      <Text fontSize="lg">
        Teléfono: <Link href="tel:+1234567890">+123 456 7890</Link>
      </Text>
    </Box>
  );
}

export default Contact;
