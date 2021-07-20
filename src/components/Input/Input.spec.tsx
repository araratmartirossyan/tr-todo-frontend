import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { StyledInput } from './index'

interface StateOfTest {
  mockCallback?: jest.Mock
}

describe('Input test', () => {
  const returnState = ({ mockCallback = jest.fn() }: StateOfTest) =>
    shallow(<StyledInput name="test" onInput={mockCallback} />)

  it('should render component', () => {
    const component = returnState({})
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should switch view on click', () => {
    const mockCallback = jest.fn()
    const component = returnState({ mockCallback })
    component.simulate('input')
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
