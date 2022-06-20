import { GET_PARTICULIER, UPDATE_PROFIL } from "../actions/particulier.actions";

const initialState = {};

export default function particulierReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PARTICULIER:
            return action.payload;

        case UPDATE_PROFIL:
            return {
                ...state,
                nom: action.payload.nom,
                telephone: action.payload.telephone,
                numR: action.payload.numR,
                adresse: action.payload.adresse
            };

        default:
            return state;
    }
}
