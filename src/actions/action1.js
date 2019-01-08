import { LOGGED_IN } from '../constants';

export default function logUser(displayName) {
    return {
        type: LOGGED_IN,
        displayName: displayName,
    }
}