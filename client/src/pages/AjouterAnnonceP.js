import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { addAnnonceP, getAnnoncesP } from "../actions/annonceP.actions";

const AjouterAnnonceP = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [nbr_pieces_bien, setNbr_pieces_bien] = useState("");
  const [superficie_bien, setSuperficie_bien] = useState("");
  const [prix_bien, setPrix_bien] = useState("");
  const [latitude_bien, setLatitude_bien] = useState("");
  const [longitude_bien, setLongitude_bien] = useState("");
  const [ville_bien, setVille_bien] = useState("");
  const [description_bien, setDescription_bien] = useState("");
  const [type_transaction, setType_transaction] = useState("");
  const [type_bien, setType_bien] = useState("");
  const [num_villa, setNum_villa] = useState("");
  const [nbr_etages, setNbr_etages] = useState("");
  const [num_appartement, setNum_appartement] = useState("");
  const [wilaya_bien, setWilaya_bien] = useState("");
  const [file, setFile] = useState();
  const particulierData = useSelector((state) => state.particulierReducer);
  const dispatch = useDispatch();

  const handleAnnonce = async (e) => {
    e.preventDefault();
    if (nbr_pieces_bien !== ""
      && superficie_bien !== ""
      && prix_bien !== ""
      && latitude_bien !== ""
      && longitude_bien !== ""
      && ville_bien !== ""
      && description_bien !== ""
      && type_transaction !== ""
      && type_bien !== ""
      && wilaya_bien !== ""
      && file !== undefined
    ) {
      const data = new FormData();
      data.append('id_particulier', particulierData._id);
      data.append('nbr_pieces_bien', nbr_pieces_bien);
      data.append('superficie_bien', superficie_bien);
      data.append('prix_bien', prix_bien);
      data.append('latitude_bien', latitude_bien);
      data.append('longitude_bien', longitude_bien);
      data.append('ville_bien', ville_bien);
      data.append('description_bien', description_bien);
      data.append('type_transaction', type_transaction);
      data.append('type_bien', type_bien);
      data.append('num_villa', num_villa);
      data.append('nbr_etages', nbr_etages);
      data.append('num_appartement', num_appartement);
      data.append('wilaya_bien', wilaya_bien);
      data.append('file', file);

      await dispatch(addAnnonceP(data)).then(() => {
        dispatch(getAnnoncesP())
      })

      setFormSubmit(true)
      alert("Votre annonce a été bien ajoutée mais elle doit être validée par l'admin pour quelle s'affiche ")
    } else {
      alert('Vous douvez romplir tous les chapms')
    };
  };

  return (
    formSubmit ? (
      <Redirect to="/gerer-annonces" />
    ) : (
      <div className="ajouter-annonce-page">
        <div className="main">
          <div className="ajouter-annonce">
            <h2>Ajouter Une Annonce</h2>

            <form action="" onSubmit={handleAnnonce}>
              <label htmlFor="nbr_pieces_bien">
                Nombre de pieces : <span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="nbr_pieces_bien"
                id="nbr_pieces_bien"
                placeholder="Entrer le nombre de pieces"
                onChange={(e) => setNbr_pieces_bien(e.target.value)}
                value={nbr_pieces_bien}
                required
              />
              <br />
              <br />
              <label htmlFor="superficie_bien">
                Superficie : <span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="superficie_bien"
                id="superficie_bien"
                placeholder="Entrer la superficie"
                onChange={(e) => setSuperficie_bien(e.target.value)}
                value={superficie_bien}
                required
              />
              <br />
              <br />
              <label htmlFor="prix_bien">
                Prix du bien : <span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="prix_bien"
                id="prix_bien"
                placeholder="Enter le prix du bien"
                onChange={(e) => setPrix_bien(e.target.value)}
                value={prix_bien}
                required
              />
              <br />
              <br />
              <label htmlFor="latitude_bien">
                Latitude : <span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="latitude_bien"
                id="latitude_bien"
                placeholder="36° 45' 9 N"
                onChange={(e) => setLatitude_bien(e.target.value)}
                value={latitude_bien}
                required
              />
              <br />
              <br />
              <label htmlFor="longitude_bien">
                Longitude : <span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="longitude_bien"
                id="longitude_bien"
                placeholder="3° 2' 31 E"
                onChange={(e) => setLongitude_bien(e.target.value)}
                value={longitude_bien}
                required
              />
              <br />
              <br />
              <label htmlFor="ville_bien">
                Ville : <span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="ville_bien"
                id="ville_bien"
                placeholder="Entrer la ville du bien"
                onChange={(e) => setVille_bien(e.target.value)}
                value={ville_bien}
                required
              />
              <br />
              <br />
              <label htmlFor="description_bien">
                Déscription du bien : <span>*</span>
              </label>
              <br />
              <textarea
                name="description_bien"
                id="description_bien"
                rows="3"
                placeholder="Déscription"
                onChange={(e) => setDescription_bien(e.target.value)}
                value={description_bien}
                required
              />
              <br />
              <br />

              <label>
                Type Transaction : <span>*</span>
              </label>
              <br />
              <input
                type="radio"
                name="type_transaction"
                id="vente"
                value="vente"
                onChange={(e) => { setType_transaction(e.target.value) }}
                required
              />
              <label htmlFor="vente" className="label-radio">
                Vente
              </label>

              <input
                type="radio"
                name="type_transaction"
                id="location"
                value="location"
                onChange={(e) => { setType_transaction(e.target.value) }}
              />
              <label htmlFor="location" className="label-radio">
                Location
              </label>
              <br />
              <br />

              <label>
                Type Bien : <span>*</span>
              </label>
              <br />
              <input
                type="radio"
                name="type_bien"
                id="villa"
                value="villa"
                onChange={(e) => { setType_bien(e.target.value) }}
                required
              />
              <label htmlFor="villa" className="label-radio">
                Villa
              </label>

              <input
                type="radio"
                name="type_bien"
                id="studio"
                value="studio"
                onChange={(e) => { setType_bien(e.target.value) }}
              />
              <label htmlFor="studio" className="label-radio">
                Studio
              </label>

              <input
                type="radio"
                name="type_bien"
                id="local"
                value="local"
                onChange={(e) => { setType_bien(e.target.value) }}
              />
              <label htmlFor="local" className="label-radio">
                Local
              </label>

              <input
                type="radio"
                name="type_bien"
                id="appartement"
                value="appartement"
                onChange={(e) => { setType_bien(e.target.value) }}
              />
              <label htmlFor="appartement" className="label-radio">
                Appartement
              </label>
              {type_bien === "villa" &&
                <>
                <br />
                <br />
                  <label htmlFor="num_villa" className="">
                  Numéro Villa : <span>*</span>
                </label>
                <input 
                  type="text"
                  name="num_villa"
                  id="num_villa"
                  required
                  value={num_villa}
                  onChange={(e) => { setNum_villa(e.target.value) }}
                />
                <br />
                <br />
                <label htmlFor="nbr_etages" className="">
                  Nombre d'étages : <span>*</span>
                </label>
                <input 
                  type="text"
                  name="nbr_etarges"
                  id="nbr_etages"
                  required
                  value={nbr_etages}
                  onChange={(e) => { setNbr_etages(e.target.value) }}
                />
                </>
              }
              {type_bien === "appartement" &&
                <>
                  <br />
                  <br />
                    <label htmlFor="num_appartement" className="">
                    Numéro d'appartement : <span>*</span>
                  </label>
                  <input 
                    type="text"
                    name="num_appartement"
                    id="num_appartement"
                    required
                    value={num_appartement}
                    onChange={(e) => { setNum_appartement(e.target.value) }}
                  />
                </>
              }
              <br />
              <br />

              <label htmlFor="wilaya_bien">
                Wilaya Bien : <span>*</span>
              </label>
              <select id="wilaya_bien" name="wilaya_bien" onChange={(e) => setWilaya_bien(e.target.value)} required>
                <option value="">Choisissez</option>
                <option value="Alger">Alger</option>
                <option value="Blida">Blida</option>
                <option value="Bejaia">Bejaia</option>
                <option value="Tizi-Ouzou">Tizi-Ouzou</option>
                <option value="Boumerdès">Boumerdès</option>
                <option value="Setif">Setif</option>
              </select>
              <br />
              <br />

              <label htmlFor="file">
                Image : <span>*</span>
              </label>
              <input
                id="file"
                type="file"
                name="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => { setFile(e.target.files[0]) }}
                required
              />
              <br />
              <br />
              <input type="submit" value="Envoyer" name="submit" id="submit" />
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default AjouterAnnonceP;