import React, {useContext} from 'react'
import { PersonContext } from '../../context/PersonContext'
import Item from './Item'


const List = () => {

    const {state} = useContext(PersonContext)

  return (
      <>
    {state.map((person)=> (
        <Item firstName={(person.firstName)} lastName={person.lastName} age={person.age}/>
    ))}
    </>
  )
}

export default List