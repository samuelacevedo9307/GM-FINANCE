import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";
import Headlanding from "@/Components/header";

export default function Registroempresas() {
  const [empresa, setEmpresa] = useState("");
  const [registro, setRegistro] = useState("");
  const [constitucion, setConstitucion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [pais, setPais] = useState("");
  const [tipo, setTipo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [cpassw, setcpassw] = useState();
  const [identificacion, setIdentificacion] = useState("");
  const [contacto, setContacto] = useState("");
  const [repLegal, setRepLegal] = useState("");
  const [cargoRepLegal, setCargoRepLegal] = useState("");
  const [docRepLegal, setDocRepLegal] = useState("");
  const [contactoRepLegal, setContactoRepLegal] = useState("");
  const [docsEmpresa, setDocsEmpresa] = useState("");
  const [estadoFinanciero, setEstadoFinanciero] = useState("");
  const [accionistas, setAccionistas] = useState("");
  const [certificados, setCertificados] = useState("");
  const [problemas, setProblemas] = useState("");
  const [autorizacion, setAutorizacion] = useState(false);
  const [aceptaTratamientoDatos, setAceptaTratamientoDatos] = useState(false);
  const [aceptaTerminosCondiciones, setAceptaTerminosCondiciones] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Execute the reCAPTCHA when the form is submitted
    //recaptchaRef.current.execute();

    // Validar los campos del formulario
    if (!empresa || !registro || !constitucion || !direccion || !pais || !tipo || !contrasena || !identificacion || !contacto || !repLegal || !cargoRepLegal || !docRepLegal || !contactoRepLegal || !docsEmpresa || !estadoFinanciero || !accionistas || !certificados || !problemas || !autorizacion) {
      // Mostrar mensaje de error si faltan campos requeridos
      alert("Por favor completa todos los campos requeridos");
      return;
    }
    if (contrasena !== cpassw) {
      // Mostrar mensaje de error si las contraseñas no coinciden
      alert("Las contraseñas no coinciden");
      return;
    }

    // Validar que se haya aceptado la política de tratamiento de datos
    if (!aceptaTratamientoDatos) {
      // Mostrar mensaje de error si no se ha aceptado la política de tratamiento de datos
      alert("Por favor acepta la política de tratamiento de datos");
      return;
    }

    // Validar que se hayan aceptado los términos y condiciones
    if (!aceptaTerminosCondiciones) {
      // Mostrar mensaje de error si no se han aceptado los términos y condiciones
      alert("Por favor acepta los términos y condiciones");
      return;
    }

    // Enviar el formulario a la API
    const hashedPassword = await bcrypt.hash(contrasena, 10); // El segundo parámetro es el número de rondas de encriptación

    const data = {
      NombreDeLaEmpresa: empresa,
      NumeroRegistroEmpresa: registro,
      ConstitucionEmpresa: constitucion,
      DireccionLegalEmpresa: direccion,
      PaisDeConstitucion: pais,
      TipoDeEntidad: tipo,
      Contrasena: hashedPassword,
      NúmeroDeIdentificacion: identificacion,
      Contacto: contacto,
      RepresentanteLegal: repLegal,
      CargoRepresentanteLegal: cargoRepLegal,
      DocumentoRepresentanteLegal: docRepLegal,
      ContactoRepresentanteLegal: contactoRepLegal,
      DocumentosEmpresa: docsEmpresa,
      EstadoFinanciero: estadoFinanciero,
      Accionistas: accionistas,
      CertificadosDeAcciones: certificados,
      ProblemasLegalesPendientes: problemas,
      AutorizacionLegal: autorizacion,
      Verificado: false,
    };
    const server = process.env.NEXT_PUBLIC_SERVER;

    try {
      const response = await fetch(`${server}/api/Empresas/singup`, {
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

      alert("Hemos enviado un correo de confirmacion");
    } catch (error) {
      console.log(error.message);
      alert("Error en la solicitud: " + error.message);
    }
  };
  return (
    <>
      <Headlanding></Headlanding>
      <h2>Crea tu cuenta De Empresas ahora</h2>
      <div className="registroEmpresa">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div>
                <label>
                  Nombre completo de la empresa:
                  <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
                </label>
                
            </div>
            <div>
                <label>
                  Número de registro de la empresa:
                  <input type="text" value={registro} onChange={(e) => setRegistro(e.target.value)} />
                </label>
                
            </div>
            <div>
                <label>
                  Fecha de constitución de la empresa:
                  <input type="date" value={constitucion} onChange={(e) => setConstitucion(e.target.value)} />
                </label>
                
            </div>
            <div>
                <label>
                  Dirección legal de la empresa:
                  <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </label>
                
            </div>
            <div>
                <label>
                  País de constitución:
                  <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} />
                </label>
                
            </div>
            <div>
                <label>
                  Tipo de entidad legal (por ejemplo, sociedad anónima, sociedad de responsabilidad limitada, etc.).:
                  <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
                </label>
               
            </div>
            <div>
                <label>
                  Contraseña:
                  <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                </label>
            </div>
            <div>
                
                <label>
                  Confirmar Contraseña:
                  <input type="password" value={cpassw} onChange={(e) => setcpassw(e.target.value)} />
                </label>
              
            </div>
            <div>
                
                <label>
                  Número de identificación fiscal de la empresa:
                  <input type="text" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} />
                </label>
                
            </div>
            <div>
                
                <label>
                  Información de contacto (teléfono, correo electrónico) de la empresa:
                  <input type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} />
                </label>
               
            </div>
            <div>
                
                <label>
                  Nombre completo del representante legal de la empresa:
                  <input type="text" value={repLegal} onChange={(e) => setRepLegal(e.target.value)} />
                </label>
              
            </div>
            <div>
                
                <label>
                  Cargo del Representante Legal:
                  <input type="text" value={cargoRepLegal} onChange={(e) => setCargoRepLegal(e.target.value)} />
                </label>
               
            </div>
            <div>
                
                <label>
                  Documento de identidad del representante legal (cédula de identidad, pasaporte, etc.):
                  <input type="text" value={docRepLegal} onChange={(e) => setDocRepLegal(e.target.value)} />
                </label>
                
            </div>
            <div>
                
                <label>
                  Información de contacto personal del representante legal:
                  <input type="text" value={contactoRepLegal} onChange={(e) => setContactoRepLegal(e.target.value)} />
                </label>
                
              </div>
            <div>
                
                <label>
                  Documentos de constitución de la empresa (acta constitutiva, estatutos, etc.):
                  <input type="text" value={docsEmpresa} onChange={(e) => setDocsEmpresa(e.target.value)} />
                </label>
                
            </div>
            <div>
                
                <label>
                  Estado financiero actualizado de la empresa:
                  <input type="text" value={estadoFinanciero} onChange={(e) => setEstadoFinanciero(e.target.value)} />
                </label>
                
            </div>
            <div>
                
            </div>
                <label>
                  Lista de accionistas y porcentaje de participación en la empresa:
                  <input type="text" value={accionistas} onChange={(e) => setAccionistas(e.target.value)} />
                </label>
                <br></br>
            <div>
                
            </div>
                <label>
                  Certificados de acciones o participaciones (si aplica):
                  <input type="text" value={certificados} onChange={(e) => setCertificados(e.target.value)} />
                </label>
                <br></br>
            <div>
                
                <label>
                  Información sobre litigios o problemas legales pendientes:
                  <input type="text" value={problemas} onChange={(e) => setProblemas(e.target.value)} />
                </label>
                <br></br>
            </div>
 
            {/* ------autorizaciones------*/}
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
          <button type="submit">Registrar</button>
      </div>
          <br></br>
    </>
  );
}
