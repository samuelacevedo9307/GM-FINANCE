import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";

export default function RecuperarContrasena() {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const router = useRouter();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setid(urlParams.get("id"));
    
  },[]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      // Mostrar mensaje de error si las contraseñas no coinciden
      alert("Las contraseñas no coinciden");
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const response = await fetch(`http://localhost:3000/api/correo?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contrasena: hashedPassword,
        }),
      });
      if (!response.ok) {
        throw new Error(response);
      }
      alert("Contraseña cambiada Con Éxito");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="fondo">
      <div className="login-container">
        <div className="form_container mt-0">
          <h1>Recuperar Contraseña</h1>
          <form onSubmit={handleSubmit}>
            <input type="password" placeholder="contraseña nueva" value={password} onChange={(e) => setpassword(e.target.value)} />
            <input type="password" placeholder="Confirmacion contraseña" value={password2} onChange={(e) => setpassword2(e.target.value)} />
            <button type="submit">Recuperar Contraseña</button>
          </form>
        </div>
      </div>
    </div>
  );
}
