import React, {createContext, useReducer} from 'react'

export const PersonContext = createContext()

const initPeople = []

const personReducer = (state, action) => {
    
    switch(action.type){
        
        case 'ADD_PERSON':
           return [...state, action.payload]
        default: return state
    }
}


const PersonProvider = (props) => {

    const [state, dispatch] = useReducer(personReducer, initPeople)

    const addPerson = (person, e) => {   
        e.preventDefault()
        dispatch({type:'ADD_PERSON',payload:person})
    }


  return (
    <PersonContext.Provider value={{state, addPerson}}>
            {props.children}
    </PersonContext.Provider>
  )
}

export default PersonProvider