import { Inter } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React from "react";
import Container from "@/Components/Container.js";
import { signOut } from "next-auth/react";

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
      const response = await fetch(`/api/${session.user._id}`, {
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
      signOut();
      router.push("/");
    } catch (error) {
      console.log(error.message);
      alert("Error en la solicitud: " + error.message);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    // De esta forma creamos nuestro alert con las opciones
    var respuesta = confirm("Esta seguro de eliminar esta cuenta.");

    if (respuesta)
      try {
        const response = await fetch(`http://localhost:3000//api/${session.user._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          const errorMessage = errorResponse.error;
          throw new Error(errorMessage);
        }

        alert("Usuario eliminado Con Éxito");
        signOut();
        router.push("/");
      } catch (error) {
        console.log(error.message);
        alert("Error en la solicitud: " + error.message);
      }
    else alert("Usted no aceptó.");
  };

  return (
    <Container>
      <section id="dash">
        <h1>Actualiza tus datos</h1>
        <form onSubmit={handleSubmit}>
          <label>Nombre completo:</label>
          <br />
          <input className="form-control" type="text" id="name" name="name" value={name} onChange={(e) => setname(e.target.value)} />
          <br />
          <label>Número de teléfono:</label>
          <br />
          <input className="form-control" type="text" id="tel" name="tel" value={tel} onChange={(e) => settel(e.target.value)} />
          <br />
          <label>Correo electrónico:</label>
          <br />
          <input className="form-control" type="text" id="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
          <br />
          <div className="row">
            <div className="col-6">
              <button className="btn btn-dark" type="submit">
                submit
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-dark" onClick={handleDelete} type="button">
                Delete
              </button>
            </div>
          </div>
        </form>
      </section>
    </Container>
  );
}
