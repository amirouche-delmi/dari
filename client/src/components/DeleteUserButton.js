import React from 'react';
import { useDispatch } from 'react-redux';
import { getAnnoncesP } from '../actions/annonceP.actions';
import { deleteUser } from '../actions/users.actions';

const DeleteUserButton = ({ user }) => {
    const dispatch = useDispatch();

    const removeUser = async () => {
        if(user.role === "agence"){
            if(window.confirm("Vouler-vous supprimer cette agence ?")){
                await dispatch(deleteUser(user._id))
                .then(() => {
                    dispatch(getAnnoncesP())
                })             
            }
        }else{
            if(window.confirm("Vouler-vous supprimer ce particulier ?")){
                await dispatch(deleteUser(user._id))
                .then(() => {
                    dispatch(getAnnoncesP())
                })  
            }
        }
    }

    return (
        <>
            <img 
                src="./img/trash.svg"
                alt="img-trash" 
                onClick={removeUser} 
            /> 
        </>
    );
};

export default DeleteUserButton;