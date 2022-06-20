import React from 'react';
import { NavLink } from 'react-router-dom';

const EditButton = ({ annonce }) => {

    return (
        <>
            <NavLink exact to={{ pathname: "/edit-annonce", state: annonce }}>
                <img
                    src="./img/edit.svg"
                    alt="img-edit"
                ></img>
            </NavLink>
        </>
    );
};

export default EditButton;