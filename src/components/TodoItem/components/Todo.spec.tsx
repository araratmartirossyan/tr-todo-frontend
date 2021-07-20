import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { EditModeTodoItem, EditModeProps } from './EditModeTodoItem'

interface TestState extends EditModeProps {
  title: string
  done: boolean
  _id: string
  onSetEditMode: jest.Mock
  onUpdate: jest.Mock
}

describe('TodoItem test', () => {
  const defaultProps: TestState = {
    title: 'Test Task',
    done: false,
    _id: '11',
    onSetEditMode: jest.fn(),
    onUpdate: jest.fn(),
  }

  const createComponent = (testProps: TestState) =>
    shallow(<EditModeTodoItem {...testProps} />)

  it('should render component', () => {
    const component = createComponent(defaultProps)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('on save button should fire updateEvent event', () => {
    const component = createComponent(defaultProps)
    const editBtn = component.find('[data-test-id="todo-save-button"]')
    expect(editBtn.exists()).toBe(true)
    editBtn.simulate('click')

    expect(defaultProps.onUpdate).toBeCalled()
  })

  it('on save button should fire updateEvent event', () => {
    const component = createComponent(defaultProps)
    const editBtn = component.find('[data-test-id="todo-save-button"]')
    expect(editBtn.exists()).toBe(true)
    editBtn.simulate('click')
    expect(defaultProps.onUpdate).toBeCalled()
    expect(defaultProps.onSetEditMode).toBeCalled()
  })
})
