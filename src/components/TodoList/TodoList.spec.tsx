import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { TodoList } from './index'

describe('Todo test', () => {
  it('should render component', () => {
    const component = shallow(
      <TodoList>
        <div></div>
        <div></div>
      </TodoList>
    )
    expect(toJson(component)).toMatchSnapshot()
  })
})
