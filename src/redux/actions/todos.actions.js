import { ADD_TODO_SUCCESS, GET_TODOS_SUCCESS } from '../constants/todos.constants';
import axios from 'axios'

// Se definen los creadores de acciones, que son funciones que retornan una acción de Redux
export function getTodos() {
    return async dispatch => {
        try {
            let res = await axios.get('http://localhost:3001/todos');
            let todos = res.data;
            dispatch(exito(todos));
        }
        catch (err) {
            console.log(err)
        }
        function exito(todos) {return {type: GET_TODOS_SUCCESS, payload: todos}}
    }
}

export function addTodo(todo) {
    return async dispatch => {
        try {
            let data = { value: todo.value }
            let res = await axios.post('http://localhost:3001/todos', data);
            let newTodo = res.data;
            dispatch(exito(newTodo));
        }
        catch (err) {
            console.log(err);
        }
        
    }
    function exito(todo) { return {type: ADD_TODO_SUCCESS, payload: todo}}
}

export function editTodo(todo) {
    return async dispatch => {
        try {
            let data = { value: todo.value };
            let res = await axios.put(`http://localhost:3001/todos/${todo.id}`, data);
            let updatedTodo = res.data;
        }
        catch (err) {
            console.log(err);
        }
    }
}