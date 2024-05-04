import {createStore , bindActionCreators, combineReducers} from "redux";

const ADD_TODO='add_todo';
const DEL_TODO='delete_todo';
const UPD_TODO='edit_todo';
const ADD_USER='add_user';

function todoReducer(state =[], action){
     if(action.type==ADD_TODO) {
        const todoText = action.payload.todoText;
        return [
            ...state,
            {text: todoText, isFinished: false, id: (state.length==0) ? 1 : state[state.length-1].id+1}        
        ]
     } else if(action.type==DEL_TODO){
        const todoId = action.payload.todoId;
        return state.filter(t => t.id != todoId);
     } else if(action.type==UPD_TODO){
        const todo=action.payload.todo;
        const todoText =action.payload.todoText;
        return state.map(t => {
            if(t.id==todo.id){
                t.text=todoText;
            }
        })

    }
    return state;
}
// const response=createStore(todoReducer,[]);

function userReducer(state=[], action){
    if(action.type==ADD_USER){
        const userName= action.payload.userName;
        return [
            ...state,
            {name:userName, id:(state.length == 0) ? 1 :state[state.length -1].id+1}
        ]
    }
    return state;
}

// action objects -> action methods (actions creator)
const addTodo=(todoText) => ({type:ADD_TODO, payload: {todoText}});
const deleteTodo =(id) => ({type:DEL_TODO, payload: {todoId: id}});
const addUser=(name) =>({type:ADD_USER, payload:{userName:name}});
 

const reducer=combineReducers({todo:todoReducer, user:userReducer})

const {dispatch, subscribe, getState, replaceReducer }=createStore(reducer);
subscribe( () => console.log(getState()));

const actions=bindActionCreators({addTodo, deleteTodo,addUser},dispatch);

actions.addTodo('todo 1');
// dispatch({type:ADD_TODO,payload:{todoText:'todo 1'}});
// console.log(getState());
actions.addUser('Rakesh');

actions.addTodo('todo 2');

// dispatch({type:ADD_TODO,payload:{todoText:'todo 2'}});
// console.log(getState());

actions.deleteTodo(1);

// dispatch({type:DEL_TODO,payload:{todoId: 1}});
// console.log(getState());

//getState tell what is the current state.
// createStore arguments are  exactly same as useReducer hooks arguments 
// and the useReducer hooks arguments are first  reducer function and second is initial state.
// createStore gives the four important methods/functions
// dispatch, subscribe , getState, replaceReducer
