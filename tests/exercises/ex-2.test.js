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
        groceryList = new ShoppingList()
        groceryList.addItem("test")

    })
    it('Each item should have a location property', () => {
        expect(groceryList.length).toBeGreaterThan(0)
        groceryList.list.forEach(i => {
            expect(i.location, "each Item should have a location property, (don't delete code we give you)").toBeTruthy()
            expect(isObservableProp(i, "location"), 'The location property should be observable').toBeTruthy()
        })
    })
    it('The location property should have a default value of "Super Sell"', () => {
        let test = groceryList.list.find(i => i.name === "test")
        expect(test.location, "each Item's location property should have a default value of 'SuperSell'")
            .toBe("Super Sell")
    })
    it('the location should be rendered next to each item', () => {
        const wrapper = render(<App store = {groceryList}/>)
        expect(wrapper.find('.location').first().length, "each item's location should be rendered with the class 'location'")
            .toBeGreaterThan(0)
        let location = wrapper.find('.location').first().html()
        expect(location, "each item's location should be rendered with the class 'location'")
            .toBeTruthy()
    })
})