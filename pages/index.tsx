import styled from 'styled-components'
import Input from '../components/Input/Input'
import Typography from '../components/Typography/Typography'

const HomeContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`

const InputContainer = styled.div`
  padding-top: 35vh;
  margin: auto;
  text-align: center;
  max-width: 560px;
`

export const Home = (): JSX.Element => (
  <HomeContainer>
    <InputContainer>
      <Typography
        className="mb-2"
        component="h1"
        variant="heading"
        color="grayDark"
      >
        SHORTEN URLS
      </Typography>
      <Input />
    </InputContainer>
  </HomeContainer>
)

export default Home
