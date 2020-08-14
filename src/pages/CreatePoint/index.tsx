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

const CreatePoint = () => {
  const [arr, setArr] = useState<File>();

  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    if (arr) {
      data.append("arr", arr);
    }

    const response = await api.post("post", data);
    console.log(response.data);
    
    alert("Ponto de coleta criado!");

    
    

    history.push(`/arrecadation/?id=${response.data.id}`);
  }

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" width="200px" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>
          Cadastro de <br /> Arrecadação
        </h1>
        <Dropzone onFileUploaded={setArr} />

        <fieldset>
          <legend>{/* <h2>Dados</h2> */}</legend>
        </fieldset>

        <button type="submit"> Cadastrar Arrecadação</button>
      </form>
    </div>
  );
};

export default CreatePoint;
