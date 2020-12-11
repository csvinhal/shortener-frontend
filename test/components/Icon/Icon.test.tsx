import Icon from '../../../components/Icon/Icon'
import { render } from '../../testUtils'

test('it works', () => {
  const { container } = render(<Icon icon="link" />)
  expect(container.firstChild).toMatchSnapshot()
})
