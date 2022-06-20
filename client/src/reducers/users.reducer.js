import { DELETE_USER, GET_USERS } from "../actions/users.actions";


const initialState = {};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return action.payload;
        
        case DELETE_USER:
            return state.filter((user) => user._id !== action.payload);

        default:
            return state;
    }
}