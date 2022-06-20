import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import UpdateProfil from "../components/UpdateProfil";

const Profil = () => {
    const uid = useContext(UidContext);

    return (
        <div className="profil-page">
            {uid ? (
                <UpdateProfil/>
            ) : (
                <div className="log-container">
                    <Log />
                    <div className="img-container">
                        <img style={{paddingLeft: "100px"}} src="./img/addnew.png" alt="img-log"></img>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profil;
