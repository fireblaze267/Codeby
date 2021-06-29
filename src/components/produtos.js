import React from 'react';
import {Flex,Text} from '@chakra-ui/react';

function produtos({name,price,image}){

    return( 
        <Flex margin="1em 0rem" border="1px" borderColor="gray.300" borderRadius="30" shadow="lg" padding="1.2rem 0.3rem" width="33vw">
            <Flex height="8rem" ml="10" >
                <img src={image} alt="produtos" />
            </Flex>
            <Flex flexDirection="column" alignItems="flex-start" width="100%" justifyContent="space-around">
                <Text textTransform="lowercase">{name}</Text>
                <Text>R$ {price /100}</Text>
                
            </Flex>
        </Flex>
    )

}

export default produtos;