import axios from 'axios';

export const GET_ANNONCES_P = "GET_ANNONCES_P";
export const ADD_ANNONCE_P = "ADD_ANNONCE_P"
export const LIKE_ANNONCE_P = "LIKE_ANNONCE_P";
export const UNLIKE_ANNONCE_P = "UNLIKE_ANNONCE_P";
export const DELETE_ANNONCE_P = "DELETE_ANNONCE_P";
export const UPDATE_ANNONCE = "UPDATE_ANNONCE";

export const getAnnoncesP = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}/api/annonce_particulier/`)
            .then((res) => {
                dispatch({ type: GET_ANNONCES_P, payload: res.data.slice().sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)) })
            })
            .catch((err) => console.log(err))
    }
}

export const updateAnnonce = (aId, data) => {
    return (dispatch) => {
        return axios
            .put(`${process.env.REACT_APP_API_URL}/api/annonce_particulier/${aId}`, data)
            .then((res) => {
                return axios
                    .get(`${process.env.REACT_APP_API_URL}/api/annonce_particulier/${aId}`)
                    .then((res) => {
                        dispatch({ type: UPDATE_ANNONCE, payload: { aId, data: res.data }})
                    })
            }).catch((err) => console.log(err))
    }
}

export const addAnnonceP = (data) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}/api/annonce_particulier/`, data)
    };
};

export const likeAnnonceP = (annoncePId, particulierId) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}/api/annonce_particulier/favorite/` + annoncePId,
            data: { id_particulier: particulierId }
        })
            .then((res) => {
                dispatch({ type: LIKE_ANNONCE_P, payload: { annoncePId, particulierId } })
            })
            .catch((err) => console.log(err))
    }
}

export const unlikeAnnonceP = (annoncePId, particulierId) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}/api/annonce_particulier/unfavorite/` + annoncePId,
            data: { id_particulier: particulierId }
        })
            .then((res) => {
                dispatch({ type: UNLIKE_ANNONCE_P, payload: { annoncePId, particulierId } })
            })
            .catch((err) => console.log(err))
    }
}

export const deleteAnnonceP = (annoncePId, particulierId) => {
    return (dispatch) => {
        return axios({
            method: 'delete',
            url: `${process.env.REACT_APP_API_URL}/api/annonce_particulier/` + annoncePId,
            data: { id_particulier: particulierId }
        })
            .then((res) => {
                dispatch({ type: DELETE_ANNONCE_P, payload: { annoncePId, particulierId } })
            })
            .catch((err) => console.log(err))
    }
}