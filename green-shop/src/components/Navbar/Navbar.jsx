import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Box, Flex } from '@chakra-ui/react'
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
                    <BreadcrumbLink href='/categoria/Remeras'>Remeras</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/categoria/Zapatillas'>Zapatillas</BreadcrumbLink>
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