import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Message } from './index'

describe('Message test', () => {
  it('should render component', () => {
    const component = shallow(<Message>Something went wrong</Message>)
    expect(toJson(component)).toMatchSnapshot()
  })
})
