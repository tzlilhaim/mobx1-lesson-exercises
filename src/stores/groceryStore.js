import { observable, action } from 'mobx'

class Item {
// your code here
}

let potatoes = new Item("Potatoes")

class ShoppingList {
    // your code here
    list;
    length;
    checkItem = () => {
        // your code here
    }
    addItem = () => {
        // your code here
    }
    editItem = () => {
        // your code here
    }
    deleteItem = () => {
        // your code here
    } 
}

let groceryList = new ShoppingList()
groceryList.list.push(potatoes)

export default groceryList