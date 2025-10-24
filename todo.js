import {createStore} from 'redux'

const initialState={
    value:10
}
function reducer(state=initialState,action){
switch(action.type){
    case "increment" :
        return {...state,value:state.value + 1}
        case "decrement" :
            return {...state,value:state.value-1}

            default :
            return state;
} 

}
const store =createStore(reducer)

store.dispatch({type:"decrement"})
console.log(store.getState());
store.dispatch({type:"decrement"})
console.log(store.getState());

