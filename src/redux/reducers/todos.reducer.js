// Reducer para los todos de la aplicación
// Se importan los tipos de acción involucrados
import {ADD_TODO_SUCCESS, GET_TODOS_SUCCESS} from '../constants/todos.constants';

const initialState = []

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS_SUCCESS:
            return action.payload
        case ADD_TODO_SUCCESS:
            const todo = action.payload;
            const new_state = [...state]
            new_state.push(todo)
            return new_state
        default:
            return state;
    }
}