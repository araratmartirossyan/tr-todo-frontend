import { shallow, ShallowWrapper } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Page } from './page'

describe('Page test', () => {
  let component: ShallowWrapper
  beforeEach(() => {
    component = shallow(
      <Page>
        <h2 data-test-id="test-item">Hello world</h2>
      </Page>
    )
  })

  it('should render component', () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should render children element', () => {
    const childElement = component.find('[data-test-id="test-item"]')
    expect(childElement.exists()).toBe(true)
  })
})
