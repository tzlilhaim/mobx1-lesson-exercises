import React, { Component } from "react"
import { observer } from "mobx-react"
import "./App.css"
import Item from "./components/Item"

@observer
class App extends Component {
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    })
  }
  addItem = () => {
    this.props.store.addItem(this.state.newItem)
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} />
        <button onClick={this.addItem}>Add</button>
        {this.props.store.list.map((item, index) => {
          return (
            <Item key={`item-${index}`} item={item} store={this.props.store} />
          )
        })}
      </div>
    )
  }
}

export default App
