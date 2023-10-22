import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function RecuperarContrasena() {
  const [correo, setcorreo] = useState("");

  const router = useRouter();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setcorreo(urlParams.get("correo"));
  }, []);
  const handlerVerify = async (event) => {
    const server = process.env.NEXT_PUBLIC_SERVER;
    try {
      const response = await fetch(`${server}/api/singup?email=${correo}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Verificado: true,
        }),
      });
      if (!response.ok) {
        throw new Error(response);
      }
      alert("Usiario Verificado");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="fondo">
      <div className="login-container">
        <div className="form_container mt-0">
          <h1>Verifica tu correo</h1>
          <button onClick={handlerVerify}>Verificar</button>
        </div>
      </div>
    </div>
  );
}
