import React,{useEffect,useState} from "react";
import {Flex,Heading,Button,Text, useBoolean} from "@chakra-ui/react"
import Produtos from "./components/produtos";
import {api2,api} from './api/api'

function App() {
  const[Api,setApi] = useBoolean();
  const [response,setResponse] = useState([]);
  const[total,setTotal] = useState();
  var toggle = null
  { Api ? toggle=api2 : toggle=api}

  useEffect(()=>{
    getData();
  },[toggle])

  async function getData(){
    await toggle.get('').then(res => {
      setTotal(res.data.totalizers[0].value)
      setResponse(res.data.items)

    })
    
  }

  return (
 <Flex height="auto" alignItems="center" mb="50" mt="50" justifyContent="center">
   <Flex height="90%" width="35vw" borderRadius="5"  alignItems="center" flexDirection="column" backgroundColor="white" color='black' padding="10px 5px">
    <Heading p="5" borderBottom="1px" width="100%" textAlign='center' borderColor="gray.500">Meu Carrinho</Heading>
   
   <ul>
    {
      response.map(data=>
        <Produtos name={data.name} price={data.price} image={data.imageUrl}/>
      )}
   </ul>

       <Flex borderTop="1px" borderBottom="1px" borderColor="gray.400" width="100%" padding="5" justifyContent="space-around">
          <Text fontSize="xl">Total</Text>
          <Text fontSize="xl">R$ {total / 100}</Text>
        </Flex> 
                  {
                    total /100 > 10 &&
                    <Text backgroundColor="green.100" borderRadius="10" padding="5" margin="5" color="green.400">Parabéns, sua compra tem frete grátis !</Text>
                    
                }
        <Flex padding="2" width="100%">
          <Button width="70%" height="4.5rem" margin="1" color="white" backgroundColor="blue.500" colorScheme="blue" >Finalizar</Button>
          <Button width="30%" height="4.5rem" margin="1"  color="white" backgroundColor="blue.500"  colorScheme="blue" onClick={setApi.toggle} >Mudar exemplos</Button>
        </Flex>

   </Flex>
 </Flex>
  );
}

export default App;
