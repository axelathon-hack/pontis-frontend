
'use client'
import CollectionCards from '@/app/components/CollectionCards'
import Navbar from '@/app/components/Navbar'
import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const BridgePage = () => {
  return (
    <Box>
    <Navbar/>
  <Flex  mt={'90px'}   >
    <Flex gap={6} mx={'auto'}>

    <Box maxW={900} mb={6} boxShadow={'base'} pb={6} borderRadius={'lg'} bg={'whiteAlpha.600'}>
<Flex bg={'white'} p={4} borderTopRadius={'lg'} mb={4}>
<Heading as='h3'>Your NFTs on &lt;chain?&gt; </Heading>
</Flex>
<CollectionCards/>
    </Box>
    

    <Box boxShadow={'base'} borderRadius={'lg'} bg={'white'} p={6}>
      right side
    </Box>
    </Flex>
  </Flex>
    </Box>
  )
}

export default BridgePage