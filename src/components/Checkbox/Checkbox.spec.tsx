import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Checkbox } from './index'

interface StateOfTest {
  checked?: boolean
  mockCallback?: jest.Mock
}

describe('Checkbox test', () => {
  const returnState = ({
    checked = false,
    mockCallback = jest.fn(),
  }: StateOfTest) =>
    shallow(<Checkbox checked={checked} onChange={mockCallback} />)

  it('should render Checkbox component', () => {
    const component = returnState({})
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should switch view on click', () => {
    const mockCallback = jest.fn()
    const component = returnState({ mockCallback })
    const input = component.find('[data-test-id="todo-checkbox"]')
    expect(input.exists()).toBe(true)
    input.simulate('change')
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
