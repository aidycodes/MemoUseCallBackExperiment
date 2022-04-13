import React from 'react'

const Item = ({ firstName, lastName, age}) => (

    <li key={firstName + lastName + age}>
        Name: {firstName + " " + lastName + "  "}
        
        Age: {age}


    </li>
  )


export default Item