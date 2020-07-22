// Reducer para los todos de la aplicación
// Se importan los tipos de acción involucrados
import {ADD_TODO} from '../constants';

const initialState = []

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const {content} = action.payload;
            const new_state = [...state]
            new_state.push(content)
            return new_state
        default:
            return state;
    }
}