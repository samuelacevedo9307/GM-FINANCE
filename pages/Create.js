import { useRef, useEffect, useState } from "react";
import CreateBtn from "@/Components/createBtn";
import Headlanding from "@/Components/header";

export default function Create() {
  const [image, setImage] = useState(true);
  const [nit, setnit] = useState("");
  const [externalLink, setExternal] = useState(false);
  const [mint, setMint] = useState("");
  const [price, setPrice] = useState("0.0");
  const [ArrPropieties, setArrPropieties] = useState([]);
  const [imputName, setImputName] = useState("");
  const [inputExteranlLink, setInputExteranlLink] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [preview, setPreview] = useState("");
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [typeInputArr, setTypeInputArr] = useState([]);

  const reset = () => {
    setImage(true);
    setMint("");
    setImputName("");
    setInputDescription("");
    setImagePreview("");
    setPreview("");
    setTypeInputArr([]);
  };

  const hiddenFileInput = useRef(null);
  const uploadImgageHandler = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    setImagePreview(fileUploaded);
  };

  useEffect(() => {
    if (imagePreview) {
      var binaryData = [];
      binaryData.push(imagePreview);
      const objectUrl = window.URL.createObjectURL(new Blob(binaryData, { type: imagePreview.type }));
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [imagePreview]);

  return (
    <section id="market">
      <Headlanding></Headlanding>
      <div className="container-market d-flex">
        <div id="create" className="">
          <div className="row d-flex justify-content-center nftContainer">
            <div className="row titlePage mb-2">
              <br></br>
              <h2>Crear nuevo proyecto</h2>
              <div className="line">
              </div>
            </div>
            <div className="optionContainer">
              <div className="row containerCreate">
                <div className="col-6 leftContainer">
                  <h3>Nombre</h3>
                  <p>Escribe aquí el nombre del nuevo proyecto aquí</p>
                  <input required id="name" type="text" value={imputName} onChange={(e) => setImputName(e.target.value)} />
                  <br></br>
                  <h3>Imagen</h3>
                  <p>Recuerda utilizar archivos: JPG, PNG, GIF, SVG, Peso Maximo: 40 MB</p>
                  <button onClick={uploadImgageHandler} className={`image ${image ? "active" : "inactive"}`}>
                    Subir Imagen
                  </button>
                  <br></br>
                  <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
                    <div className="imgProyecto">
                        <img src={preview} width={300} height={300} />
                    </div>
                </div>
                <div className="col-6 columnDos">
                    <div className="crearProyecto">
                          <div className="rightContainer">
                            <div className="description">
                              <h3>Descripción</h3>
                              <p>Escribe aquí los parametros e información requeridos</p>
                              <textarea required id="description" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />
                            </div>
                            <label>NIT*</label>
                            <input required id="name" type="text" value={nit} onChange={(e) => setnit(e.target.value)} />

                          </div>
                        <div>
                            <label>
                              <i className="">Supply:</i>
                            </label>
                            <input></input>          
                        </div>
                        <div>
                            <label>
                              <i className="">Simbolo:</i>
                            </label>
                            <input></input>          
                        </div>
                        <div>
                            <label>
                              <i className="">Nombre:</i>
                            </label>
                            <input></input>          
                        </div>
                        <div>
                            <label>
                              <i className="">Decimales:</i>
                            </label>
                            <input></input>          
                        </div>
                        <br></br>
                        <CreateBtn imagePreview={imagePreview} inputExteranlLink={inputExteranlLink} imputName={imputName} inputNit={nit} inputDescription={inputDescription} reset={reset} />
                        
                      </div>
                  </div>
              </div>

            </div>
            <div className="alertBox">
              <div style={{ width: "100%" }}>
                {msgSuccess && (
                  <div>
                    {alertMsg}
                    <button onClick={() => setMsgSuccess(false)}>Close</button>
                  </div>
                )}
                {msgError && (
                  <div>
                    {alertMsg}
                    <button onClick={() => setMsgError(false)}>Close</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
