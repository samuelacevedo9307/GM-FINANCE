import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function LoginPage() {
  const router = useRouter();
  const [ti, setti] = useState("Empresa");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password } = event.target.elements;
    try {
      const result = await signIn("credentials", {
        type: ti,
        email: email.value,
        contrasena: password.value,
        redirect: false,
      });
      if (!result.ok) {
        throw new Error(result.error);
      }
      router.push("/");
    } catch (error) {
      console.log(error.message);
      alert("Error en la solicitud: " + error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="form_container mt-0">
          <div> 
            <div className="tipoCuenta">
                <label>
                  <select name="Type" placeholder="Tipo" value={ti} onChange={(e) => setti(e.target.value)}>
                    <option value="Pnatural">Cuenta usuario</option>
                    <option value="Empresa">Cuenta empresa</option>
                  </select>
                  <i className="">Elige tu cuenta</i>
                </label>
                
              </div>
              </div>
          <h2>Accede a tu cuenta ahora</h2>
          <form className="login" onSubmit={handleSubmit}>
            <input placeholder="Email" type="email" name="email" required />
            <input placeholder="Password" type="password" name="password" required />
            <Link href={"recuperar-contrasena"}>¿olvidaste tu contraseña?</Link>
            <button type="submit">Conectar</button>
          </form>
          {/*<Link href="/recuperar-contrasena">Olvidaste tu contraseña?</Link>*/}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
