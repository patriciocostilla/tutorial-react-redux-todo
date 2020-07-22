import { ADD_TODO } from '../constants';

// Se definen los creadores de acciones, que son funciones que retornan una acción de Redux
export function addTodo(content) {
    return {type: ADD_TODO, payload: { content }
    }
}