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
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as='nav' bg='gray.200' justifyContent='space-between' alignItems='center' p={4}>
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton icon={<HamburgerIcon />} aria-label='Open Menu' onClick={onOpen} />
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Image src={logo} alt='Green Shop' width={70} />
              </DrawerHeader>
              <DrawerBody>
                <Stack spacing={4}>
                  <Box>
                    <Button as={Link} to='/' variant="ghost" onClick={onClose}>Home</Button>
                  </Box>
                  <Box>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                        Categorías
                      </MenuButton>
                      <MenuList>
                        <MenuItem as={Link} to='/categoria/Legumbres' onClick={onClose}>Legumbres</MenuItem>
                        <MenuItem as={Link} to='/categoria/Frutos secos' onClick={onClose}>Frutos secos</MenuItem>
                        <MenuItem as={Link} to='/categoria/Panificados' onClick={onClose}>Panificados</MenuItem>
                        <MenuItem as={Link} to='/categoria/Barras cereal' onClick={onClose}>Barras de cereal</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                  <Box>
                    <Button as={Link} to='/nosotros' variant="ghost" onClick={onClose}>Nosotros</Button>
                  </Box>
                  <Box>
                    <Button as={Link} to='/contacto' variant="ghost" onClick={onClose}>Contacto</Button>
                  </Box>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
      <Flex align='center' justifyContent={{ base: 'center', md: 'space-between' }} width='100%'>
        <Link to='/'>
          <Image src={logo} alt='Green Shop' width={70} />
        </Link>
        <Stack direction='row' spacing='12px' display={{ base: 'none', md: 'flex' }} flexGrow={1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                  Categorías
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} to='/categoria/Legumbres'>Legumbres</MenuItem>
                  <MenuItem as={Link} to='/categoria/Frutos secos'>Frutos secos</MenuItem>
                  <MenuItem as={Link} to='/categoria/Panificados'>Panificados</MenuItem>
                  <MenuItem as={Link} to='/categoria/Barras cereal'>Barras de cereal</MenuItem>
                </MenuList>
              </Menu>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/nosotros'>Nosotros</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/contacto'>Contacto</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Stack>
        <Box>
          <CartWidget />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;

