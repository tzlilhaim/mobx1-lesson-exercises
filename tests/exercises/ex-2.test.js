import React from 'react';
import App from '../../src/App';
import { render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {isObservableProp } from 'mobx'
import { ShoppingList } from '../../src/stores/ShoppingList';

configure({ adapter: new Adapter() });

let groceryList
describe("exercise 2", () => {
    beforeAll(()=> {
        groceryList = new ShoppingList
        groceryList.addItem("test")

    })
    it('Each item should have a location property', () => {
        expect(groceryList.length).toBeGreaterThan(0)
        groceryList.list.forEach(i => {
            expect(i.location).toBeTruthy()
            expect(isObservableProp(i, "location"), 'The location property should be observable').toBeTruthy()
        })
    })
    it('The location property should have a default value of "Super Sell"', () => {
        let test = groceryList.list.find(i => i.name === "test")
        expect(test.location).toBe("Super Sell")
    })
    it('the location should be rendered next to each item', () => {
        const wrapper = render(<App store = {groceryList}/>)
        let location = wrapper.find('.location').first().html()
        console.log(location)
        expect(location).toBeTruthy()
    })
})