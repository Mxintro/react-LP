/*
  接受两个参数：之前的状态preState(初始化时为undefined), 动作对象action
 */
export default function countReducer(preState=0, action) {
  const {type, data} = action

  switch (type) {
    case 'increment': 
      return preState + data
    case 'decrement': 
      return preState - data
    default: 
      return preState
  }
}