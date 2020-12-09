import styled from 'styled-components'
import Typography from '../components/Typography/Typography'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.capri};
`

const SubTitle = styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.dimgray};
`

const OtherThing = styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.jet};
`

export const Home = (): JSX.Element => (
  <>
    <Typography>Teste</Typography>
    <Title>Primário</Title>
    <SubTitle>Secundária</SubTitle>
    <OtherThing>Outra coisa</OtherThing>
  </>
)

export default Home
