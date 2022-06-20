import axios from "axios"

export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";

export const getUsers = () => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}/api/particulier/`)
        .then((res) => {
            dispatch({ type: GET_USERS, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}

export const deleteUser = (uId) => {
    return (dispatch) => {
        return axios({
            method: 'delete',
            url: `${process.env.REACT_APP_API_URL}/api/particulier/${uId}`
        })
            .then((res) => {
                dispatch({ type: DELETE_USER, payload: uId })
            })
            .catch((err) => console.log(err))
    }
}