import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "./styles.css";
import arrecadado from "../../assets/arrecadado.jpg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectecFileUrl, setSelectedFileUrl] = useState("");
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      console.log(acceptedFiles);
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".arr",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept=".arr" />

      {selectecFileUrl ? (
        // <img
        //   //  src={selectecFileUrl}
        //   src={arrecadado}
        //   alt="Point Thumbnail"
        // />
<div id="dropzone">
        {/* <Loader
          type="Puff"
          color="#00BFFF"
          // height={100}
          // width={100}
          timeout={1000} //3 secs

        >
        </Loader> */}
          <p>Arquivo carregado</p>
          </div>
      ) : (
        <p>
          <FiUpload />
          Clique aqui ou arraste o arquivo
        </p>
      )}
    </div>
  );
};

export default Dropzone;
