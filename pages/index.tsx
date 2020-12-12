import styled from 'styled-components'
import Icon from '../components/Icon/Icon'
import TextField from '../components/TextField/TextField'
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
        color="black"
      >
        SHORTEN URLS
      </Typography>
      <TextField
        startAdornment={<Icon icon="link" color="primary" />}
        endAdornment={<Icon type="rounded" icon="arrowRight" color="primary" />}
      />
    </InputContainer>
  </HomeContainer>
)

export default Home
