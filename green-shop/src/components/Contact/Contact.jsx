import React from 'react';
import { Box, Heading, Text, Link, FormControl, FormLabel, Input, Textarea, Button, Stack } from '@chakra-ui/react';

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
      <Text fontSize="lg" mb={8}>
        Teléfono: <Link href="tel:+1234567890">+123 456 7890</Link>
      </Text>
      <Box as="form" maxW="md" mx="auto">
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Correo electrónico</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Mensaje</FormLabel>
            <Textarea />
          </FormControl>
          <Button type="submit" colorScheme="green" size="lg" mt={4}>Enviar</Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Contact;
