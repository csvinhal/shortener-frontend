import Typography from '../../../components/Typography/Typography'
import { render } from '../../testUtils'

test('it works', () => {
  const { container } = render(<Typography>Teste</Typography>)
  expect(container.firstChild).toMatchSnapshot()
})
