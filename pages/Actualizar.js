import { Inter } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React from "react";
import Container from "@/Components/Container.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  const [name, setname] = useState();
  const [tel, settel] = useState();
  const [email, setemail] = useState();

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Execute the reCAPTCHA when the form is submitted
    //recaptchaRef.current.execute();

    // Enviar el formulario a la API

    const data = {
      Nombre: name,
      telefono: tel,
      email: email,
       // Utiliza la contraseña encriptada en lugar de la original
    };

    try {
      const response = await fetch(`http://localhost:3000//api/${session.user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.error;
        throw new Error(errorMessage);
      }

      alert("Usuario Actualizado Con Éxito");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      alert("Error en la solicitud: " + error.message);
    }
  };

  return (
    <Container>
      <section id="dash">
        <form onSubmit={handleSubmit}>
          <label>Nombre completo:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <label>Número de teléfono:</label>
          <br />
          <input
            type="text"
            id="tel"
            name="tel"
            value={tel}
            onChange={(e) => settel(e.target.value)}
          />
          <br />
          <label>Correo electrónico:</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </section>
    </Container>
  );
}
