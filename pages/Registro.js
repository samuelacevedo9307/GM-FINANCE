import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";

export default function Registro() {
  const [name, setname] = useState();
  const [ti, setti] = useState();
  const [idnum, setidnum] = useState();
  const [date, setdate] = useState();
  const [nacion, setnacion] = useState();
  const [tel, settel] = useState();
  const [email, setemail] = useState();
  const [passw, setpassw] = useState();
  const [cpassw, setcpassw] = useState();
  const [prof, setprof] = useState();
  const [fondos, setfondos] = useState();
  const [ingr, setingr] = useState();
  const [block, setblock] = useState();
  const [pfondos, setpfondos] = useState();
  const [ver, setver] = useState(false);
  const [aceptaTratamientoDatos, setAceptaTratamientoDatos] = useState(false);
  const [aceptaTerminosCondiciones, setAceptaTerminosCondiciones] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Execute the reCAPTCHA when the form is submitted
    //recaptchaRef.current.execute();

    // Validar los campos del formulario
    if (!name || !ti || !idnum || !date || !nacion || !tel || !email || !passw || !cpassw || !prof || !fondos || !ingr || !block || !pfondos) {
      // Mostrar mensaje de error si faltan campos requeridos
      alert("Por favor completa todos los campos requeridos");
      return;
    }
    if (passw !== cpassw) {
      // Mostrar mensaje de error si las contraseñas no coinciden
      alert("Las contraseñas no coinciden");
      return;
    }
    // Validar que se haya aceptado la política de tratamiento de datos
    if (!ver) {
      // Mostrar mensaje de error si no se ha aceptado la política de tratamiento de datos
      alert("Por favor Declara la veracidad de los datos");
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
    const hashedPassword = await bcrypt.hash(passw, 10); // El segundo parámetro es el número de rondas de encriptación

    const data = {
      Nombre: name,
      identificacion: "(" + ti + ")" + idnum,
      nacimiento: date,
      Nacionalidad: nacion,
      telefono: tel,
      email: email,
      contrasena: hashedPassword,
      Ocupacion: prof,
      OrigenDeFondos: fondos,
      FuenteDeIngresos: ingr,
      ConocimientoBlockchain: block,
      ProcedenciaDeFondos: pfondos, // Utiliza la contraseña encriptada en lugar de la original
    };

    try {
      const response = await fetch("http://localhost:3000/api/auth/singup", {
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

      alert("Usuario Creado Con Éxito");
      var miModal = new bootstrap.Modal(document.getElementById('miModal'));
      miModal.show();
    } catch (error) {
      console.log(error.message);
      alert("Error en la solicitud: " + error.message);
    }
  };
  return (
    <>
    <h2>Crea tu cuenta ahora</h2>
      <div className="registro-container">
        <div className="form_container mt-0">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="registro1">
                <div >
                  <label>
                    <i className=""></i> Nombre completo:
                  </label>
                  
                  <input type="text" id="name" name="name" value={name} onChange={(e) => setname(e.target.value)} />
                </div>
                 
                <div >
                  <label>
                  <select className="" name="ti" placeholder="TI" value={ti} onChange={(e) => setti(e.target.value)}>
                    <option value="">TI</option>
                    <option value="CC">CC</option>
                    <option value="NIT">NIT</option>
                    <option value="CE">CE</option>
                    <option value="PA">PA</option>
                  </select>
                    <i className=""></i> Número de identificación:
                  </label>
                  
                  <input type="text" id="doc" name="doc" value={idnum} onChange={(e) => setidnum(e.target.value)} />
                 
                </div>
              </div>
            <div className="registro2">
              <div>
                <i className="">Fecha de Nacimiento:</i> 
                <input type="date" id="blockchain" name="blockchain" value={date} onChange={(e) => setdate(e.target.value)} />
              </div>
              <div>
                <i className="">Nacionalidad:</i> 
              
                  <input type="text" id="blockchain" name="blockchain" value={nacion} onChange={(e) => setnacion(e.target.value)} />
              </div>
                
            </div>
            <div className="registro3">
              <div>
                <label>
                  <i className="">Número de teléfono:</i> 
                </label>
                
                <input type="text" id="tel" name="tel" value={tel} onChange={(e) => settel(e.target.value)} />
                
              </div>
              <div>
                <label>
                  <i className="">Correo electrónico:</i> 
                </label>
                
                <input type="text" id="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
                
              </div>
            </div>
            <div className="registro4">
              <div>
                <label>
                  <i className="">Contraseña:</i> 
                </label>
                
                <input type="password" id="passw" name="passw" value={passw} onChange={(e) => setpassw(e.target.value)} />
                
              </div>
              <div>
                <label>
                  <i className="">Confirmacion Contraseña:</i> 
                </label>
                
                <input type="password" id="cpassw" name="cpassw" value={cpassw} onChange={(e) => setcpassw(e.target.value)} />
                
              </div>
            </div>
            <div className="registro5">
              <div>
                <label>
                  <i className="">Ocupación o profesión:</i> 
                </label>
                
                <input type="text" id="ocupacion" name="ocupacion" value={prof} onChange={(e) => setprof(e.target.value)} />
                
              </div>
              <div>
                <label>
                  <i className="">Origen de fondos:</i> 
                </label>
                
                <input type="text" id="fondos" name="fondos" value={fondos} onChange={(e) => setfondos(e.target.value)} />
              </div>
            </div>
              <div className="registro6">
                <div>
                  
                  <label>
                    <i className="">Fuente de ingresos:</i> 
                  </label>
                  
                  <input type="text" id="ingresos" name="ingresos" value={ingr} onChange={(e) => setingr(e.target.value)} />
                </div>
                <div>
                  
                  <label>
                    <i className="">Procedencia de los fondos:</i> 
                  </label>
                 
                  <input type="text" id="pfondos" name="pfondos" value={pfondos} onChange={(e) => setpfondos(e.target.value)} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="boolean">
          <div className="boolean">
            <br />
          <label>
            <p type="button">Conocimiento en criptomonedas y tecnología blockchain:</p>
          </label>
          <input type="checkbox" checked={block} onChange={(e) => setblock(e.target.checked)} />
              <br />
            <label>
              <p type="button"> Declaración de veracidad:</p>
              <input type="checkbox" checked={ver} onChange={(e) => setver(e.target.checked)} />
              <span className="checkmark"></span>
            </label>
              <br />
            <label>
              <p type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Acepto las política de tratamiento de datos personales: &nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <input type="checkbox" checked={aceptaTratamientoDatos} onChange={(e) => setAceptaTratamientoDatos(e.target.checked)} />
              <span className="checkmark"></span>
            </label>
            <br />
            <label>
              <p type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Acepto los términos y condiciones:
              </p>
              <input type="checkbox" checked={aceptaTerminosCondiciones} onChange={(e) => setAceptaTerminosCondiciones(e.target.checked)} />
              <span className="checkmark"></span>
            </label>
            <br />
          </div>
          <button  className="botonSubmit" type="submit">Registrar</button>
      </div>
    </>
  );
}
