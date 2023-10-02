import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function LoginPage() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    try{
    const result = await signIn("credentials", {
      email: email.value,
      contrasena: password.value,
      redirect: false,
    });
    if (!result.ok) {
      throw new Error(result.error);
    }
    router.push("/dashboard");
  }catch(error){
    console.log(error.message);
    alert("Error en la solicitud: " + error.message);
  }
    

  };

  return (
    <>
      <div className="login-container">
        <div className="form_container mt-0">
          <h2>Accede a tu cuenta ahora</h2>
          <form className="login" onSubmit={handleSubmit}>
            <input placeholder="Email" type="email" name="email" required />
            <input placeholder="Password" type="password" name="password" required />
            <button type="submit">Conectar</button>
          </form>
          {/*<Link href="/recuperar-contrasena">Olvidaste tu contraseña?</Link>*/}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
