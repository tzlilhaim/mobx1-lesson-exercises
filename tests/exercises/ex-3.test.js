import React from 'react';
import App from '../../src/App';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ShoppingList } from '../../src/stores/ShoppingList';

configure({ adapter: new Adapter() });

let groceryList
describe("exercise 3", () => {
    beforeAll(() => {
        groceryList = new ShoppingList
    })
    it ('The store should have an editItem function that edits the location of a given item', () => {
        groceryList.addItem("test")
        groceryList.editItem("test", "wonderland")
        const test = groceryList.list.find(i => i.name === "test")
        expect(test.location).toBe("wonderland")
    })
    it ('editItem function should be a MobX action', () => {
        expect(groceryList.editItem.isMobxAction).toBeTruthy()
    })
    it('Edit button should be rendered per each list item and work on click', () => {
        const wrapper = mount(<App store = {groceryList}/>)
        let onClick = wrapper.find('.editButton').first().prop('onClick')
        expect(onClick).toBeDefined()
    })
})