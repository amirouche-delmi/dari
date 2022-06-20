import axios from "axios"

export const GET_PARTICULIER = "GET_PARTICULIER";
export const UPDATE_PROFIL = "UPDATE_PROFIL";

export const getParticulier = (uid) => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}/api/particulier/${uid}`)
        .then((res) => {
            dispatch({ type: GET_PARTICULIER, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}

export const updateProfil = (uId, info) => {
    return (dispatch) => {
        return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}/api/particulier/${uId}`,
            data: { nom: info.nom, telephone: info.telephone, adresse: info.adresse ,numR: info.numR}
        }).then((res) => {
            dispatch({ type: UPDATE_PROFIL, payload: info })
        }).catch((err) => console.log(err))
    }
}