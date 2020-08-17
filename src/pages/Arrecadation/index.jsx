import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
// import { Map, TileLayer, Marker } from 'react-leaflet';
// import { LeafletMouseEvent } from 'leaflet';
import api from "../../services/api";
// import axios from 'axios';
import Dropzone from "../../components/Dropzone";
import List from '@opuscapita/react-list';


import "./styles.css";

import logo from "../../assets/logo.svg";

// export interface RecoveryProps {
//   bankNameHeader: string;
//   companyHeader: string;
//   formatedtotalValueTrailler: string;
//   // cost: number;
//   // name: string;
//   // subject: string;
//   // whatsapp: string;
// }
// interface RecoveryPropsItem {
//   recoverys: RecoveryProps;
// }

// const Arrecadation: React.FC<RecoveryProps> = ({
//   bankNameHeader,
//   companyHeader,
//   formatedtotalValueTrailler,
// }) =>
function Arrecadation() {
  const [recovery, setRecovery] = useState([]);
  const [boletos, setBoletos] = useState([]);
  // let [value, setValue] = useState("");
  // const value = recovery.formatedtotalValueTrailler.toLocaleString('pt-BR',{ style:'currency', currency:'BRL'})

  const history = useHistory();
  // console.log(window.location.search.substring(4));

  useEffect(() => {
    async function loadRecovery() {
      const response = await api.get(
        `/get/?id=${window.location.search.substring(4)}`
        // {
        // params: {
        //   bankNameHeader,
        //   companyHeader,
        //   formatedtotalValueTrailler,
        // },
        // }
      );
      // console.log("OPA", response.data);

      setRecovery(response.data.search[0]);
      setBoletos(response.data.boletos);
      // console.log("oparecovery)
    }
    loadRecovery();
  }, []);

  const columns = [
    { valueKey: 'idAgencyBody', title: 'Agencia' },
    { valueKey: 'barCodeBody', title: 'Codigo de barras' },
    { valueKey: 'valueReciveBody', title: 'Valor' },
  ];
  const Row = boletos.map((boleto) => [
    // key={boleto._id}
    `${boleto.idAgencyBody}`,
    `${boleto.barCodeBody}`,
    `${boleto.valueReciveBody}`,
   
    // ["Mason Porter", "Chile", "Gloucester", "$78,615"],
  ]);
  console.log({Row});
  const valueTotal = recovery.formatedtotalValueTrailler
  let   strings = new Intl.NumberFormat('pt-BR',{ style:'currency', currency:'BRL'}).format(valueTotal)
  // strings.format(shit);

  // console.log("holy shiet",strings);
  // strings.toLocaleString('pt-BR',{ style:'currency', currency:'BRL'})
  // const thing = recovery.formatedtotalValueTrailler

  // function valueFormated(thing){
  //   setValue = thing.toLocaleString('pt-BR',{ style:'currency', currency:'BRL'});

  //   return value;
  // }
  // const doidera = valueFormated(recovery.formatedtotalValueTrailler);

  // console.log("doidera", doidera);
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
          Dados da <br /> Arrecadação
        </h1>
        {/* <Dropzone onFileUploaded={setSelectedFile} /> */}

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome do Banco</label>
            <input
              type="text"
              readOnly
              name="bankNameHeader"
              value={`${recovery.bankNameHeader}`}
              // onChange={handleInputChange}
              id="bankNameHeader"
              />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Nome da Empresa / Órgão</label>
              <input
                type="text"
                readOnly
                name="companyHeader"
                value={recovery.companyHeader}
                // onChange={handleInputChange}
                id="companyHeader"
                />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Valor total recebido</label>
              <input
                type="text"
                readOnly
                name="whatsapp"
                value={`${strings}`}
                // onChange={handleInputChange}
                id="whatsapp"
              />
              {/* {recovery.formatedtotalValueTrailler.toLocale} */}
            </div>
          </div>
        </fieldset>

        <legend>{/* <h2>Dados</h2> */}</legend>
        {/* </fieldset> */}
        <List
        columns={columns}
        items={Row}
        idKey="itemId"
        isColumnHeaderVisible
        isSortable
        // onSortEnd={handleSortEnd}
      />
        {/* <button type="submit"> Cadastrar Arrecadação</button> */}
      </form>
    </div>
  );
}

export default Arrecadation;
