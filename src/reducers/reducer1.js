import { LOGGED_IN } from '../constants';

let user = {
    displayName: null,
}

export default function Reducer(state = user, action) {
    switch (action.type) {
        case LOGGED_IN:
            const {displayName} = action;
            user = {
                displayName
            } 
            return user;
        default:
            return state;
    }
}
