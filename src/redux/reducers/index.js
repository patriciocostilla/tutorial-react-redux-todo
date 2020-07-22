// Se importa la función combineReducers para formar el reducer raíz del store
import {combineReducers} from 'redux';

// Se importan todos los reducers de la aplicación, que se van a combinar
import todos from './todos.reducer'
import user from './user.reducer'

// A partir de la función combineReducers se obtiene el root reducer que se utiliza el store
export default combineReducers({ todos, user})