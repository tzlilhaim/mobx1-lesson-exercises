import React from 'react';
import App from '../../src/App';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ShoppingList } from '../../src/stores/ShoppingList';

configure({ adapter: new Adapter() });

let groceryList
describe("exercise 4", () => {
    beforeAll(() => {
        groceryList = new ShoppingList()
        groceryList.addItem("test")
    })
    it ('The store should have a deleteItem function that deletes an item from the list', () => {
        const test1 = groceryList.list.find(i => i.name === "test")
        expect(test1, "the addItem function should add an item to the list")
            .toBeTruthy()
        groceryList.deleteItem("test")
        const test2 = groceryList.list.find(i => i.name === "test")
        expect(test2, "the delete Item function should delete a given item from the list")
            .toBeFalsy()
    })
    it ('deleteItem function should be a MobX action', () => {
        expect(groceryList.deleteItem.isMobxAction, "deleteItem function should be a MobX action")
            .toBeTruthy()
    })
    it('delete button should be rendered per each list item and work on click', () => {
        groceryList.addItem("test2")
        groceryList.addItem("test3")
        const wrapper = mount(<App store = {groceryList}/>)
        let selected = wrapper.find(".listItem").first().props().value
        expect(wrapper.find('.deleteButton').first().props().value, "each Item shoudl be rendered with a delete button with the class 'deleteButton'")
            .toBeDefined()
        wrapper.find('.deleteButton').first().simulate('click')
        expect(wrapper.find(".listItem").first().props().value, "the delete button should work on click, and once an item is deleted it should not longer be rendered")
            .not.toBe(selected)
    })
})