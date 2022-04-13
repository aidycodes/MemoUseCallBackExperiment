import React, {useRef} from 'react'

const StaticComponent = React.memo(() => {

    const staticRef = useRef(0)
    console.log('static component renders:', staticRef.current++)
  return (
    <div>StaticComponent</div>
  )
})

export default StaticComponent