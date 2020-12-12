import TextField from '../../../components/TextField/TextField'
import { render } from '../../testUtils'

test('it works', () => {
  const { container } = render(<TextField />)
  expect(container.firstChild).toMatchSnapshot()
})
