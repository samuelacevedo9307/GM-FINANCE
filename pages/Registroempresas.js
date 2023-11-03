import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";

export default function Registroempresas() {
  const [empresa, setEmpresa] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [cpassw, setcpassw] = useState();
  const [identificacion, setIdentificacion] = useState("");
  const [contacto, setContacto] = useState("");
  const [repLegal, setRepLegal] = useState("");
  const [cargoRepLegal, setCargoRepLegal] = useState("");
  const [docRepLegal, setDocRepLegal] = useState("");
  const [contactoRepLegal, setContactoRepLegal] = useState("");
  const [docsEmpresa, setDocsEmpresa] = useState("");
  const [problemas, setProblemas] = useState("");
  const [autorizacion, setAutorizacion] = useState(false);
  const [aceptaTratamientoDatos, setAceptaTratamientoDatos] = useState(false);
  const [aceptaTerminosCondiciones, setAceptaTerminosCondiciones] = useState(false);

  const router = useRouter();

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    console.log("entra")

    // Validar los campos del formulario
    if (!empresa || !contrasena || !identificacion || !contacto || !repLegal || !autorizacion) {
      alert("Por favor completa todos los campos requeridos");
      return;
    }
    if (contrasena !== cpassw) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!aceptaTratamientoDatos) {
      alert("Por favor acepta la política de tratamiento de datos");
      return;
    }

    if (!aceptaTerminosCondiciones) {
      alert("Por favor acepta los términos y condiciones");
      return;
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const data = {
      NombreDeLaEmpresa: empresa,
      Contrasena: hashedPassword,
      NumeroDeIdentificacion: identificacion,
      Contacto: contacto,
      RepresentanteLegal: repLegal,
      AutorizacionLegal: autorizacion,
      Verificado: true,
    };
    const server = process.env.NEXT_PUBLIC_SERVER;

    try {
      const response = await fetch(`/api/Empresas/singup`, {
        method: "POST",
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

      alert("Empresa Creada Con exito");
    } catch (error) {
      console.log(error.message);
      alert("Error en la solicitud: " + error.message);
    }
  };

  return (
    <>
      <h2>Crea tu cuenta De Empresas ahora</h2>
      <div className="registroEmpresa">
        <div className="">
          <form onSubmit="">
            <div>
              <label>
                Nombre completo de la empresa:
                <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
              </label>
              <br></br>
            </div>
            <div>
              <label>
                Nombre completo del representante legal de la empresa:
                <input type="text" value={repLegal} onChange={(e) => setRepLegal(e.target.value)} />
              </label>
              <br></br>
            </div>
            <div>
              <label>
                Nit:
                <input type="text" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} />
              </label>
              <br></br>
            </div>
            <div>
              <label>
                Correo
                <input type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} />
              </label>
              <br></br>
            </div>
            <div>
              <label>
                Contraseña:
                <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
              </label>
              <br></br>
            </div>
            <div>
              <label>
                Confirmar Contraseña:
                <input type="password" value={cpassw} onChange={(e) => setcpassw(e.target.value)} />
              </label>
              <br></br>
            </div>
            <div className="autorizacionEmpresa">
              <div>
                <label>
                  Autorización legal para tokenizar la empresa (si es requerida en su jurisdicción)
                </label>
                <br></br>
                <input type="checkbox" checked={autorizacion} onChange={() => setAutorizacion(!autorizacion)} />
              </div>
              <div>
                <label>
                  Acepto el tratamiento de datos
                </label>
                <br></br>
                <input type="checkbox" checked={aceptaTratamientoDatos} onChange={() => setAceptaTratamientoDatos(!aceptaTratamientoDatos)} />
              </div>
              <div>
                <label>
                  Acepto los términos y condiciones
                </label>
                <br></br>
                <input type="checkbox" checked={aceptaTerminosCondiciones} onChange={() => setAceptaTerminosCondiciones(!aceptaTerminosCondiciones)} />
              </div>
            </div>
          </form>
          <br></br>
        </div>
      </div>
      <div className="botonEmpresa">
        <button onClick={handleSubmit2}>Registrar</button>
      </div>
      <br></br>
    </>
  );
}
