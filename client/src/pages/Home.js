import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAnnoncesP } from "../actions/annonceP.actions";
import { isEmpty } from "../components/Utils";
import Footer from "../components/Footer";

const Home = () => {
  const [prix_min, setPrix_min] = useState(0);
  const [prix_max, setPrix_max] = useState(0);
  const [type_transaction, setType_transaction] = useState("");
  const [ville, setVille] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [type_bien, setType_bien] = useState("");

  const [nbAnnonce, setNbAnnonce] = useState(3);
  var nb = 1;
  var nbAnnonceMax = 0;

  const [loadAnnonceP, setLoadAnnonceP] = useState(true);
  const dispatch = useDispatch();
  const annoncesP = useSelector((state) => state.annoncePReducer);

  useEffect(() => {
    if (loadAnnonceP) {
      dispatch(getAnnoncesP());
      setLoadAnnonceP(false);
    }
  }, [loadAnnonceP, dispatch]);

  const handleSearch = async (e) => {
    e.preventDefault();
    window.location = "/";
  };

  const max = () => {
    !isEmpty(annoncesP[0]) && annoncesP.forEach(annonce => {
      if (annonce.valide === true) {
        nbAnnonceMax = nbAnnonceMax + 1
      }
    })
    return nbAnnonceMax
  }

  return (
    <>
      <div className="imagePrincipale">
        <h1>Trouvons une maison qui vous convient.</h1>
        <div id="premierTrait"></div>
        <h3>Trouver un bien entre particuliers...</h3>

        <form action="" onSubmit={handleSearch}>
          <div>
            <div className="main">
              <div className="left">
                <label htmlFor="prix_min">Prix min :</label>
                <br />
                <input
                  type="number"
                  id="prix_min"
                  placeholder="prix min"
                  onChange={(e) => setPrix_min(e.target.value)}
                  value={prix_min}
                />
                <br />
                <br />

                <label htmlFor="prix_max">Prix max :</label>
                <br />
                <input
                  type="number"
                  name="type_transaction"
                  id="prix_max"
                  placeholder="prix max"
                  onChange={(e) => setPrix_max(e.target.value)}
                  value={prix_max}
                />
                <br />
                <br />

                <label>Type Transaction :</label>
                <br />

                <div className="type-trans">
                  <div>
                    <input
                      type="radio"
                      name="type_transaction"
                      id="vente"
                      value="vente"
                      onChange={(e) => {
                        setType_transaction(e.target.value);
                      }}
                    />
                    <label htmlFor="vente" className="label-radio">
                      Vente
                    </label>
                  </div>

                  <div className="margin-radio">
                    <input
                      type="radio"
                      name="type_transaction"
                      id="location"
                      value="location"
                      onChange={(e) => {
                        setType_transaction(e.target.value);
                      }}
                    />
                    <label htmlFor="location" className="label-radio">
                      Location
                    </label>
                  </div>
                </div>
                <div className="nb-annonce">
                  <label className="label-radio">
                    Nbr : &nbsp;
                  </label>
                  <input type="range" min="1" max={max()} value={nbAnnonce}
                    onChange={(e) => setNbAnnonce(e.target.value)}
                  />
                </div>
              </div>


              <div className="right">
                <label htmlFor="ville">Ville :</label>
                <br />
                <input
                  type="text"
                  id="ville"
                  placeholder="la ville"
                  onChange={(e) => setVille(e.target.value)}
                  value={ville}
                />
                <br />
                <br />

                <label htmlFor="wilaya">Wilaya :&nbsp;</label>
                <select
                  id="wilaya"
                  name="wilaya"
                  onChange={(e) => setWilaya(e.target.value)}
                >
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

                <label>Type Bien :</label>
                <br />
                <div className="type-bien">
                  <div className="margin-radio">
                    <input
                      type="radio"
                      name="type_bien"
                      id="villa"
                      value="villa"
                      onChange={(e) => {
                        setType_bien(e.target.value);
                      }}
                    />
                    <label htmlFor="villa" className="label-radio">
                      Villa
                    </label>
                  </div>
                  <div className="margin-radio">
                    <input
                      type="radio"
                      name="type_bien"
                      id="studio"
                      value="studio"
                      onChange={(e) => {
                        setType_bien(e.target.value);
                      }}
                    />
                    <label htmlFor="studio" className="label-radio">
                      Studio
                    </label>
                  </div>
                  <div className="margin-radio">
                    <input
                      type="radio"
                      name="type_bien"
                      id="local"
                      value="local"
                      onChange={(e) => {
                        setType_bien(e.target.value);
                      }}
                    />
                    <label htmlFor="local" className="label-radio">
                      Local
                    </label>
                  </div>
                  <div className="margin-radio">
                    <input
                      type="radio"
                      name="type_bien"
                      id="appartement"
                      value="appartement"
                      onChange={(e) => {
                        setType_bien(e.target.value);
                      }}
                    />
                    <label htmlFor="appartement" className="label-radio">
                      Appartement
                    </label>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>

          <input type="submit" value="Tous les biens" name="submit" id="submit" />
        </form>

      </div>

      <div className="Bien">
        <div className="bien">
          <div className="grid">
            {!isEmpty(annoncesP[0]) &&
              annoncesP.map((annonceP) => {
                if (annonceP.valide === true && nb <= nbAnnonce) {
                  nb++
                  if (
                    type_transaction === "" &&
                    parseInt(prix_min, 10) <= 0 &&
                    parseInt(prix_max, 10) <= 0 &&
                    type_bien === "" &&
                    ville === "" &&
                    wilaya === ""
                  ) {
                    return <Card annonceP={annonceP} key={annonceP._id} />;
                  } else {
                    if (
                      (type_transaction === annonceP.type_transaction || type_transaction === "") &&
                      (type_bien === annonceP.type_bien || type_bien === "") &&
                      (wilaya === annonceP.wilaya_bien || wilaya === "") &&
                      (ville === annonceP.ville_bien || ville === "") &&
                      (parseInt(prix_min, 10) <= parseInt(annonceP.prix_bien, 10) || parseInt(prix_min, 10) <= 0 || prix_min === "") &&
                      (parseInt(prix_max, 10) >= parseInt(annonceP.prix_bien, 10) || parseInt(prix_max, 10) <= 0 || prix_max === "")
                    ) {
                      return <Card annonceP={annonceP} key={annonceP._id} />;
                    } else {
                      return null
                    }
                  } 
                } else {
                  return null
                }
              })}
          </div>
        </div>
      </div>
      < Footer />
    </>
  );
};

export default Home;
