import { combineReducers } from 'redux'

const teamState = [
    {name:'name1'},
    {name:'name2'},
    {name:'name3'},
]

const carState = [
    {part:'suspension', description:'yehhh idk...'}
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

const carReducer = (state = carState, action) => {
    switch(action.type){
        default:
            return state
    }
}

const rootReducer = combineReducers({team: teamReducer, car:carReducer})

export default rootReducer