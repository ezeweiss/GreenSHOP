import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Center } from '@chakra-ui/react'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div>
        <Center>
            <Breadcrumb spacing='8px'  >
                <BreadcrumbItem>
                    <Image src='src\assets\Logo.png' alt='Green Shop' width={70}/>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <CartWidget />
                </BreadcrumbItem>
            </Breadcrumb>
        </Center>
        
    </div>
  )
}

export default Navbar