import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import MenuButton from '~root/components/MenuButton'
import MenuWrapper from '~root/components/MenuWrapper'
import Navigation from '~root/components/Navigation'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title='Home Page' />

      <Navigation />

      <Container maxWidth={['90%', , '80%']} paddingY={8}>
        <Flex direction={['column', , 'row']} alignItems='center'>
          <Box maxWidth={['100%', , '50%']}>
            <Image src='/splash.jpg' />
          </Box>

          <Text fontSize='2xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
            sint ex impedit nisi assumenda quas soluta et numquam accusantium,
            veniam placeat consequatur quibusdam distinctio necessitatibus odio
            ea, aliquam eveniet provident!
          </Text>
        </Flex>
      </Container>

      <Heading textAlign='center'>Mau yang mana?</Heading>

      <MenuWrapper>
        <MenuButton href='/materi'>Materi</MenuButton>
        <MenuButton href='/soal'>Latihan Soal</MenuButton>
      </MenuWrapper>
    </>
  )
}

export default Home
