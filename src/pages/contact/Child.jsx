import React, {memo} from 'react'

const Child = ({count}) => {
    console.log("Child render");
    
  return (
    <div>Child {count}</div>
  )
}

export default memo(Child)