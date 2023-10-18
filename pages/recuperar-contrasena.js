import { useState } from "react";

export default function RecuperarContrasena() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correoElectronico: email }),
      });
      if (!response.ok) {
        throw new Error(response);
      }
      alert("Correo enviado con exito");
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
            <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Recuperar Contraseña</button>
          </form>
        </div>
      </div>
    </div>
  );
}
