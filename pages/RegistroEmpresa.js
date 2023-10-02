export default function RegistroEmpresa() {

  return(

<section>
    <h2>Crea tu cuenta ahora</h2>
      <div className="registro-container">
        <div className="form_container mt-0">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="">
                <div >
                  <label>
                    <i className=""></i> Nombre empresa:
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
            <div className="">
              <div>
                <label>
                  <i className="">Número de contacto:</i> 
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
            <div className="">
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
            <div className="">
              <div>
                <label>
                  <i className="">Ocupación:</i> 
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
            </div>
          </form>
        </div>
      </div>
      <div className="">
          <div className="">
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
</section>
  )
}