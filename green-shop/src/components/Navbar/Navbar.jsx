import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Box, Flex, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <Flex as='nav' bg='gray.200' justifyContent='center'>
            <Breadcrumb spacing='12px'>
                <BreadcrumbItem>
                    <Box mt={2} mb={2}>
                        <Link to='/'>
                            <Image src='src\assets\Logo.png' alt='Green Shop' width={70}/>
                        </Link>
                    </Box>     
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Productos</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Categorias
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
                    <BreadcrumbLink href='/nosotros'>Nosotros</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/contacto'>Contacto</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <CartWidget />
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
  )
}

export default Navbar