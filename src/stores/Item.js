import { observable } from 'mobx'

export class Item {
    @observable name
    @observable completed = false
    constructor(name) {
        this.name = name
    }
}