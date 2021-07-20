import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { TodoItem, Props } from './index'

interface TestState extends Props {
  title: string
  done: boolean
  _id: string
  onRemove: jest.Mock
  onUpdate: jest.Mock
}

describe('TodoItem test', () => {
  const defaultProps: TestState = {
    title: 'Test Task',
    done: false,
    _id: '11',
    onRemove: jest.fn(),
    onUpdate: jest.fn(),
  }

  const createComponent = (testProps: TestState) =>
    shallow(<TodoItem {...testProps} />)

  it('should render component', () => {
    const component = createComponent(defaultProps)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('on edit button click Edit mode Component should appear', () => {
    const component = createComponent(defaultProps)
    const editBtn = component.find('[data-test-id="todo-edit-button"]')
    expect(editBtn.exists()).toBe(true)
    editBtn.simulate('click', {
      stopPropagation: () => {},
    })

    const editComponent = component.find('[data-test-id="todo-edit-task"]')
    expect(editComponent.exists()).toBe(true)
  })

  it('on remove button click it should fire onRemove event', () => {
    const component = createComponent(defaultProps)
    const editBtn = component.find('[data-test-id="todo-remove-button"]')
    expect(editBtn.exists()).toBe(true)
    editBtn.simulate('click', {
      stopPropagation: () => {},
    })

    expect(defaultProps.onRemove).toBeCalled()
  })

  it('on toggle checkbox click it should fire onUpdate event', () => {
    const component = createComponent(defaultProps)
    const editBtn = component.find('[data-test-id="todo-checkbox-toogle"]')
    expect(editBtn.exists()).toBe(true)
    editBtn.simulate('change')

    expect(defaultProps.onUpdate).toBeCalledWith({
      title: 'Test Task',
      done: true,
      _id: '11',
    })
  })
})
