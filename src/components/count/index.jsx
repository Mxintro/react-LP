import React, { Component } from 'react'
import store from '../../redux/store'
// 引入action
import { createIncrementAction, createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {
  
  state = {count: 0}

  componentDidMount() {
    store.subscribe(()=> {
      this.setState({})
    })
  }
    
  increment = () => {
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
  }
  decrement = () => {
    const {value} = this.selectNumber 
    store.dispatch(createDecrementAction(value*1))
  }
  incrementIfodd = () => {
    const {value} = this.selectNumber
    if (value%2 !==0) {
      store.dispatch(createIncrementAction(value*1))
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    const {count} = this.state

    setTimeout( () => {
      this.setState({count: count+value*1})
    }, 500)   
  }

  render() {
    return (
      <div>
        <h1>当前求和： {store.getState()}</h1>
        <select ref={c=> this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfodd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
