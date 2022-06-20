import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAnnonceP } from '../actions/annonceP.actions';

const DeleteButton = ({ annonce }) => {
    const dispatch = useDispatch();

    const remove = () => {
        if(window.confirm("Vouler-vous supprimer cette annonce ?")){
            dispatch(deleteAnnonceP(annonce._id, annonce.id_particulier))
        }
    }

    return (
        <>
            <img 
                src="./img/trash.svg"
                alt="img-trash" 
                onClick={remove} 
            /> 
        </>
    );
};

export default DeleteButton;