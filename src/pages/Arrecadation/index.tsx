import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
// import { Map, TileLayer, Marker } from 'react-leaflet';
// import { LeafletMouseEvent } from 'leaflet';
import api from "../../services/api";
// import axios from 'axios';
import Dropzone from "../../components/Dropzone";

import "./styles.css";

import logo from "../../assets/logo.svg";

export interface RecoveryProps {
  bankNameHeader: string;
  companyHeader: string;
  formatedtotalValueTrailler: string;
  // cost: number;
  // name: string;
  // subject: string;
  // whatsapp: string;
}
interface RecoveryPropsItem {
  recoverys: RecoveryProps;
}

const Arrecadation: React.FC<RecoveryPropsItem> = ({ recoverys }) => {
  const [recovery, setRecovery] = useState([]);

  const history = useHistory();
  console.log(window.location.search.substring(1));

  useEffect(() => {
    async function loadRecovery() {
      const response = await api.get(
        `/get/?id=${window.location.search.substring(1)}`
      );
      setRecovery(response.data);
    }
    loadRecovery();
  }, []);

  

  // async function handleSubmit(event: FormEvent) {
  //   event.preventDefault();

  //   const data = new FormData();

  //   if (arr) {
  //     data.append("arr", arr);
  //   }

  //   const response = await api.post("post", data);
  //   console.log(response.data);

  //   alert("Ponto de coleta criado!");

  //   history.push(`/id=${response.data}`);
  // }

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" width="200px" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form
      // onSubmit={handleSubmit}
      >
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>
        {/* <Dropzone onFileUploaded={setSelectedFile} /> */}

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="bankNameHeader"
              // value={recoverys.bankNameHeader}
              // onChange={handleInputChange}
              id="bankNameHeader"
            />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                // onChange={handleInputChange}
                id="email"
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                // onChange={handleInputChange}
                id="whatsapp"
              />
            </div>
          </div>
        </fieldset>

        <legend>{/* <h2>Dados</h2> */}</legend>
        {/* </fieldset> */}

        <button type="submit"> Cadastrar Arrecadação</button>
      </form>
    </div>
  );
};

export default Arrecadation;
