import { observable, action } from "mobx"
import { Item } from "./Item"

export class ShoppingList {
  @observable list = []
  @observable length
  @action checkItem = (itemName) => {
    let item = this.list.find((i) => i.name === itemName)
    item.completed = !item.completed
  }
  addItem = (itemName) => {
    let item = new Item(itemName)
    this.list.push(item)
  }
  editItem = (itemName, newLocation) => {
    let item = this.list.find((i) => i.name === itemName)
    item.location = newLocation
  }
  deleteItem = (itemName) => {
    const index = this.list.findIndex((item) => item.name === itemName)
    this.list.splice(index, 1)
  }
}
