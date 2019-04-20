import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShoppingList from '../../src/stores/ShoppingList'


configure({ adapter: new Adapter() });
let groceryList
describe("exercise1", () => {
    beforeAll(()=> {
        groceryList = new ShoppingList()
    })
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App store ={groceryList} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      
    it('App is reading the mobx store list property', () => {
        const wrapper = mount(<App store ={groceryList}/>);
        console.log(wrapper.props)
        expect(wrapper.props().store.list).toBeDefined();
    });
})






