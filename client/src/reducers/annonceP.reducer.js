import {
  DELETE_ANNONCE_P,
  GET_ANNONCES_P,
  LIKE_ANNONCE_P,
  UNLIKE_ANNONCE_P,
  UPDATE_ANNONCE,
} from "../actions/annonceP.actions";

const initialState = {};

export default function annoncePReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANNONCES_P:
      return action.payload;
    case LIKE_ANNONCE_P:
      return state.map((annonceP) => {
        if (annonceP._id === action.payload.annoncePId) {
          return {
            ...annonceP,
            list_particulier_suivie: [
              action.payload.particulierId,
              ...annonceP.list_particulier_suivie,
            ],
          };
        }
        return annonceP;
      });
    case UNLIKE_ANNONCE_P:
      return state.map((annonceP) => {
        if (annonceP._id === action.payload.annoncePId) {
          return {
            ...annonceP,
            list_particulier_suivie: annonceP.list_particulier_suivie.filter(
              (id) => id !== action.payload.particulierId
            ),
          };
        }
        return annonceP;
      });

    case DELETE_ANNONCE_P:
      return state.filter((annonceP) => annonceP._id !== action.payload.annoncePId);

    case UPDATE_ANNONCE:
      return state.map((annonce) => {
        if (annonce._id === action.payload.aId) {
          return {
            ...annonce,
            valide: action.payload.data.valide,
            prix_bien: action.payload.data.prix_bien,
            ville_bien: action.payload.data.ville_bien,
            wilaya_bien: action.payload.data.wilaya_bien,
            latitude_bien: action.payload.data.latitude_bien,
            longitude_bien: action.payload.data.longitude_bien,
            type_transaction: action.payload.data.type_transaction,
            type_bien: action.payload.data.type_bien,
            superficie_bien: action.payload.data.superficie_bien,
            nbr_pieces_bien: action.payload.data.nbr_pieces_bien,
            description_bien: action.payload.data.description_bien,
            nom_prop_bien: action.payload.data.nom_prop_bien,
            email_prop_bien: action.payload.data.email_prop_bien,
            tel_prop_bien: action.payload.data.tel_prop_bien,
            url_image_bien: action.payload.data.url_image_bien,
          }
        } else return annonce;
      });

    default:
      return state;
  }
}
