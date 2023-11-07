import axios from "axios";
import React, { useState, useEffect } from "react";

export default function CreateBtn(props) {
  const [finalUri, setFinalUri] = useState("");
  const [finalPrice, setFinalPrice] = useState("0.0");
  const [maxsupply, setmaxsupply] = useState("0.0");
  /*
   *       Funciones de validacion y pinata
   */
  const validation = async () => {
    uploadToPinataImage();
  };

  const uploadToPinataImage = async () => {
    const formData = new FormData();
    formData.append("file", props.imagePreview);
    /*const result = await axios.post('/api/image', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            console.log(props.imagePreview)*/
    const config = {
      method: "POST",
      maxContentLength: Infinity,
      headers: {
        pinata_api_key: "4651addb2fb80214d5f0",
        pinata_secret_api_key: "170e1a0ad531cc5f6b165684931bddbcb1cad81adfca0101769f12af8cefffb5",
      },
      body: formData,
    };

    try {
      const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", config);

      const data = await response.json();
      console.log(data.IpfsHash);
      //return data.IpfsHash;
      uploadToPinataMetadata(data.IpfsHash);
    } catch (error) {
      console.log(error);
    }
  };
  const uploadToPinataMetadata = async (IpfsHash) => {
    let metadata = {
      name: props.imputName,
      description: props.inputDescription,
      nit:props.nit,
      image: "",
      users: 1,
      raking: 5,
      token: " ",

    };
    metadata.image = `https://ipfs.io/ipfs/${IpfsHash}`;

    console.log("Metadata: ");
    console.log(metadata);

    const config = {
      method: "POST",
      maxContentLength: Infinity,
      headers: {
        "Content-Type": "application/json",
        pinata_api_key: "4651addb2fb80214d5f0",
        pinata_secret_api_key: "170e1a0ad531cc5f6b165684931bddbcb1cad81adfca0101769f12af8cefffb5",
      },
      body: JSON.stringify(metadata),
    };
    const uri = process.env.NEXT_PUBLIC_SERVER;
    const response = await fetch(`/api/Projects`, config);
    alert("Proyecto Creado");
    const data = await response.json();
    setFinalUri("ipfs://" + data.IpfsHash);
  };



  return (
    <div className="Create">
      <button className="hbuton" onClick={validation}>
        CREAR
      </button>
    </div>
  );
}
