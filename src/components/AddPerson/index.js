import React, { useContext, useState, useCallback } from 'react'
import Input from './Input'
import { PersonContext } from '../../context/PersonContext'
import Button from './Button'
import StaticComponent from './StaticComponent'
import StateComponent from './StateComponent'

const AddPerson = () => {

    const {addPerson} = useContext(PersonContext)

    const [person, setPerson] = useState({
        firstName:'',
        lastName:'',
        age:''
    })

    const [first, setFirst] = useState('')

    
    const handleInput = useCallback((e, type) => {
        setPerson({...person, [type]:e.target.value }) 
    },[person])

    const handleFirstNameInput = useCallback((e) => {
        setFirst(e.target.value)
    },[])

  return (
    <div>
    <StaticComponent/>
    <StateComponent firstName={first}/>
        <form onSubmit={(e) => addPerson(person, e)}>
            <Input type="text" value={first} handleInput={handleFirstNameInput} name="firstName"/>
            <Input type="text" value={person.lastName} handleInput={handleInput} name="lastName"/>
            <Input type="number" value={person.age} handleInput={handleInput} name="age"/>
            <Button>Submit</Button>
        </form>
    </div>
  )
}

export default AddPerson