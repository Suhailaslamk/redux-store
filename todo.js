import { combineReducers, createStore } from "redux";

function counterReducer(state={count : 10},action){
    switch(action.type){
        case 'increment':
            return {count : state.count + 1}
            case 'decrement':
                return {count : state.count - 1}
                default :
                    return state;
    }
}
const initial={
    todos:[]
}
function addTodo(state=initial,action){
    switch(action.type){
        case 'addTodo':
            return {todos :[...state.todos,action.payload.text]}
                default :
                    return state;
    }
}

const reducers = combineReducers({
    counter:counterReducer,
    todo:addTodo
})

const store =createStore(reducers)

store.dispatch({type:'increment'})
store.dispatch({type:'addTodo',payload:{text : 'you did'}})

console.log(store.getState());
