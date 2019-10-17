import { combineReducers } from 'redux'

const teamState = [
    {name:'name1'},
    {name:'name2'},
    {name:'name3'},
]

const teamReducer = (state = teamState, action) => {
    switch(action.type){
        case "ADD_MEMBER":
            const teamState = action.payload
            return [...state, teamState]
        default:
            return state
    }
}

const nullReducer = (state = 12345, action) => {
    switch(action.type){
        default: 
            return state
    }
}

const rootReducer = combineReducers({team: teamReducer, null:nullReducer})

export default rootReducer