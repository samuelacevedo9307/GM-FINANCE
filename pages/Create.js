import { useRef, useEffect, useState } from "react";
import { useMoralis } from "react-moralis"; // Importar hook useMoralis de react-moralis para interactuar con la cadena Ethereum
import token from "../constants/contracts/Token"; // Importar el ABI del contrato de Token desde una ubicación específica
import Web3 from "web3"; // Importar Web3 para interactuar con Ethereum
import bytecode from "@/constants/contracts/bitecode";
import CreateBtn from "@/Components/createBtn"
import Headlanding from "@/Components/header";

export default function Create() {
  const { isWeb3Enabled, account } = useMoralis();

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
  const [name, setName] = useState(""); // Estado para el nombre del token
  const [symbol, setSymbol] = useState("test"); // Estado para el símbolo del token
  const [decimals, setDecimals] = useState(6); // Estado para el número de decimales del token
  const [totalSupply, setTotalSupply] = useState(); // Estado para el suministro total del token
  const [walletAddress, setWalletAddress] = useState("¡Hola! :D"); // Estado para la dirección de la billetera del usuario
  const [deployedContractAddress, setDeployedContractAddress] = useState("¡Hola! :D"); // Estado para la dirección del contrato desplegado
  const [contractSource, setContractSource] = useState("");

  const web3 = new Web3(Web3.givenProvider || "https://bsc.getblock.io/31e07977-c162-45cb-b663-0ac03a7cb8ab/testnet/");

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
    console.log(`account: ${account}`);
    let res = account;
    setWalletAddress(account !== undefined ? res : "");
  }, [account]);

  // Efecto para mostrar la dirección de la billetera en la consola cuando cambia
  useEffect(() => {
    console.log(`wallet address: ${walletAddress}`);
  }, [walletAddress]);


  useEffect(() => {
    if (imagePreview) {
      var binaryData = [];
      binaryData.push(imagePreview);
      const objectUrl = window.URL.createObjectURL(new Blob(binaryData, { type: imagePreview.type }));
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [imagePreview]);

   // Manejador para crear y desplegar un contrato de token
   const onHandleClick = async () => {
    // Crear una instancia del contrato Token
    let myContract = new web3.eth.Contract(token);
  
    // Calcular el suministro total multiplicado por un millón
    let supply = totalSupply * 1000000;
    console.log(bytecode);
  
    // Añadir un gas limit (por ejemplo, 300,000 unidades de gas)
    const gasLimit =500000;
  
    // Desplegar el contrato utilizando el bytecode y los parámetros especificados
    myContract
      .deploy({
        data: bytecode,
        arguments: [name, symbol, supply.toString(),walletAddress],
      })
      .send({
        from: walletAddress,
       
      })
      .then(function (newContractInstance) {
        console.log(newContractInstance.options.address);
        setDeployedContractAddress(newContractInstance.options.address);
      })
      .catch(function(error) {
        // Manejar cualquier error durante el despliegue del contrato
        console.error("Error en el despliegue del contrato:", error);
      });
  };
  

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
                            <input type="number" value={totalSupply} onChange={(e) => setTotalSupply(Number(e.target.value))} placeholder="Total Supply" />      
                        </div>
                        <div>
                            <label>
                              <i className="">Simbolo:</i>
                            </label>
                            <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value.toString())} placeholder="Símbolo" />         
                        </div>
                        <div>
                            <label>
                              <i className="">Nombre:</i>
                            </label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value.toString())} placeholder="Nombre" />        
                        </div>
                        <div>
                            <label>
                              <i className="">Decimales:</i>
                            </label>
                            <input type="number" value={decimals} onChange={(e) => setDecimals(Number(e.target.value))} placeholder="Decimales" />         
                        </div>
                        <br></br>
                        <button onClick={onHandleClick}>Crear Token</button>
                        <br></br>
                        <CreateBtn imagePreview={imagePreview} inputExteranlLink={inputExteranlLink} imputName={imputName} inputNit={nit} inputDescription={inputDescription} hashToken={deployedContractAddress} reset={reset} />
                        
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
