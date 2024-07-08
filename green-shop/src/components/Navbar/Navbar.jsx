import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'

function Navbar() {
  return (
    <Flex as='nav' bg='gray.200' justifyContent='space-between' alignItems='center' p={4}>
      <Flex align='center'>
        <Link to='/'>
          <Image src={logo} alt='Green Shop' width={70} />
        </Link>
        <Stack direction='row' spacing='12px' ml={8}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                    Categorías
                </MenuButton>
                <MenuList>
                    <MenuItem as={Link} to='/categoria/Legumbres'>
                    Legumbres
                    </MenuItem>
                    <MenuItem as={Link} to='/categoria/Frutos secos'>
                    Frutos secos
                    </MenuItem>
                    <MenuItem as={Link} to='/categoria/Panificados'>
                    Panificados
                    </MenuItem>
                    <MenuItem as={Link} to='/categoria/Barras cereal'>
                    Barras de cereal
                    </MenuItem>
                </MenuList>
                </Menu>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='/nosotros'>Nosotros</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='/contacto'>Contacto</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Stack>
      </Flex>
      <Box>
        <CartWidget />
      </Box>
    </Flex>
  );
}

export default Navbar;
