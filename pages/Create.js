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
              <h2>Create New Item</h2>
              <div className="line"></div>
            </div>
            <div className="row optionContainer">
              <div className="col-lg-6">
                <div className="leftContainer">
                  <h3>Image*</h3>
                  <p>File types supported: JPG, PNG, GIF, SVG, Max size: 40 MB</p>
                  <button onClick={uploadImgageHandler} className={`image ${image ? "active" : "inactive"}`}>
                    Subir Imagen
                  </button>
                  <br></br>
                  <img src={preview} width={500} height={500} />
                  <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
                  <h3>Name*</h3>
                  <input required id="name" type="text" value={imputName} onChange={(e) => setImputName(e.target.value)} />
                </div>
              </div>

              <div className="col-lg-6 rightContainer">
                <div className="description">
                  <h3>Description</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <textarea required id="description" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />
                </div>
                <h3>NIT*</h3>
                <input required id="name" type="text" value={nit} onChange={(e) => setnit(e.target.value)} />

                <CreateBtn imagePreview={imagePreview} inputExteranlLink={inputExteranlLink} imputName={imputName} inputNit={nit} inputDescription={inputDescription} reset={reset} />
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
