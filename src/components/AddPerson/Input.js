import React, { useRef } from 'react'

const Input = React.memo((props) => {

let renders = useRef(0)

console.log(`renders ${props.name} ${renders.current++}`)

  return(
      <>
    <label name={props.name}/>
    <input type={props.type} value={props.value} onChange={(e) => props.handleInput(e, props.name)}/>
    </>
  )
})

export default Input