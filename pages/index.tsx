import { Box, Flex, Text} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"

//Components
import {StyleTravel} from "../components/IconStyleTravel"

//Images
import LogoWorldTrip from '../assets/Header.png'
import AirPlane from "../assets/Airplane.png"
import { RiGobletFill } from 'react-icons/ri'
import  {TbBeach} from "react-icons/tb"
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  return (
    <Box w="100%" fontFamily={theme.fonts.mono} >
      <Flex h="100px" justify="center" align="center" >
        <Image src={LogoWorldTrip} alt="eronar"/>
      </Flex>
      
      <Flex w="100%" justify="center" bgGradient="linear(to-r, #062E49, #000F22)">
        <Flex w="100%" px="140px" maxW={1440} minH="335px" align="center" position="relative">
          <Box >
            <Text fontWeight="500" fontSize="36px" lineHeight="54px" color={theme.colors.white[700]}>
              5 Continentes,<br/>
              infinitas possibilidades.
            </Text>
            <Text maxW="700px" fontSize="20px" color={theme.colors.white[600]}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Box>
          <Box position="absolute" bottom="-30px" right="140px" transform="rotate(3deg)" w="400px">
            <Image src={AirPlane} alt='dsad' />
          </Box>
        </Flex>
      </Flex>
      <Flex w="100%" maxW={1440} px="140px" mt="100px"  mb="80px" justify="space-between" >
        <StyleTravel icon={RiGobletFill} label="vida noturna"/>
        <StyleTravel icon={TbBeach} label="vida noturna"/>
        <StyleTravel icon={RiGobletFill} label="vida noturna"/>
        <StyleTravel icon={RiGobletFill} label="vida noturna"/>
      </Flex>
      <Box bg='#47585B' width="50px" h="1px" margin="auto"></Box>
      <Flex flexDirection="column" justify="center" textAlign="center" mt="52px">
        <Text fontSize="36px" fontWeight="500" lineHeight="54px">Vamos nessa? <br/> Então escolha seu continente</Text>
        <Carousel>
          
        </Carousel>
      </Flex>
    </Box>
  )
}
