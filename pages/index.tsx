import Image from 'next/image'
import styled from 'styled-components'
import Typography from '../components/Typography/Typography'

const HomeContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`

const BackgroundImage = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`

const InputContainer = styled.div`
  padding-top: 30%;
  text-align: center;
`

export const Home = (): JSX.Element => (
  <HomeContainer>
    <BackgroundImage>
      <Image
        alt="Mountains"
        src="/background.jpg"
        layout="fill"
        objectFit="cover"
      />
    </BackgroundImage>

    <InputContainer>
      <Typography
        className="mb-2"
        component="h1"
        variant="heading"
        color="white"
      >
        SHORTEN URLS
      </Typography>
      <input />
    </InputContainer>
  </HomeContainer>
)

export default Home
