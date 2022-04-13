import React, {useRef} from 'react'

const StateComponent = React.memo((props) => {

     const stateCRef = useRef(0)
    console.log('State component renders:', stateCRef.current++)

  return (
    <div>{props.firstName}</div>
  )
})

export default StateComponent