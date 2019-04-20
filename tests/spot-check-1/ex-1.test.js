import Adapter from 'enzyme-adapter-react-16';
import ShoppingList from '../../src/stores/ShoppingList'
import { isObservable } from 'mobx' 
import { mount, render, shallow, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("exercise1", () => {
    it ('groceryList class store should have an observable property "list"', () => {
        const store = ShoppingList;
        expect(store, "You should have exported a class groceryList").toBeDefined()
        expect(isObservable(store.list), "the list property should be observable").toBeTruthy()
    })
})






