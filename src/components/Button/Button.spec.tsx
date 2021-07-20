import { shallow, ShallowWrapper } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Button } from './index'

describe('Button test', () => {
  let component: ShallowWrapper
  let mockCallback: jest.Mock

  beforeEach(() => {
    mockCallback = jest.fn()
    component = shallow(<Button onClick={mockCallback}>Some text</Button>)
  })

  it('should render Button component', () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should render props text', () => {
    expect(component.text()).toBe('Some text')
  })

  it('should  call event on click', () => {
    const btn = component.find('[data-test-id="todo-button"]')
    expect(btn.exists()).toBe(true)
    btn.simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
