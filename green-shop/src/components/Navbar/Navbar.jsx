import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Box, Flex } from '@chakra-ui/react'
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {
  return (
        <Flex as='nav' bg='gray.200' justifyContent='center'>
            <Breadcrumb spacing='12px'>
                <BreadcrumbItem>
                    <Box mt={2} mb={2}>
                        <Image src='src\assets\Logo.png' alt='Green Shop' width={70}/>
                    </Box>     
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/categorias/Remeras'>Productos</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Nosotros</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <CartWidget />
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
  )
}

export default Navbar