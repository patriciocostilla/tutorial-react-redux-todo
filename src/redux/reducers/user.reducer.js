import {USER_LOGIN, USER_LOGOUT} from '../constants/user.constants';

let user = JSON.parse(localStorage.getItem('user'))

let initialState;

if (user) {
    initialState = {user}
} else {
    initialState = {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOGIN:
            const {user} = action.payload;
            return {user}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

