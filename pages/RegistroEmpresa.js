export default function RegistroEmpresa() {

  return(

<section>
    <h2>Crea tu cuenta ahora</h2>
      <div className="registro-container">
        <div className="form_container mt-0">
          <form onSubmit="">
            <div>
              <div className="">
                <div >
                  <label>
                    <i className=""></i> Nombre empresa:
                  </label>
                  
                  <input type="text" id="name" name="name"/>
                </div>
                 
                <div >
                  <label>
                  <select className="" name="ti" placeholder="TI" >
                    <option value="">TI</option>
                    <option value="CC">CC</option>
                    <option value="NIT">NIT</option>
                    <option value="CE">CE</option>
                    <option value="PA">PA</option>
                  </select>
                    <i className=""></i> Número de identificación:
                  </label>
                  
                  <input type="text" id="doc" name="doc"  />
                 
                </div>
              </div>
            <div className="">
              <div>
                <label>
                  <i className="">Número de contacto:</i> 
                </label>
                
                <input type="text" id="tel" name="tel"  />
                
              </div>
              <div>
                <label>
                  <i className="">Correo electrónico:</i> 
                </label>
                
                <input type="text" id="email" name="email"  />
                
              </div>
            </div>
            <div className="">
              <div>
                <label>
                  <i className="">Contraseña:</i> 
                </label>
                
                <input type="password" id="passw" name="passw"  />
                
              </div>
              <div>
                <label>
                  <i className="">Confirmacion Contraseña:</i> 
                </label>
                
                <input type="password" id="cpassw" name="cpassw"  />
                
              </div>
            </div>
            <div className="">
              <div>
                <label>
                  <i className="">Ocupación:</i> 
                </label>
                <input type="text" id="ocupacion" name="ocupacion"/>
              </div>
              <div>
                <label>
                  <i className="">Origen de fondos:</i> 
                </label>
                  <input type="text" id="fondos" name="fondos"/>
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
          <input type="checkbox" />
              <br />
            <label>
              <p type="button"> Declaración de veracidad:</p>
              <input type="checkbox"  />
              <span className="checkmark"></span>
            </label>
              <br />
            <label>
              <p type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Acepto las política de tratamiento de datos personales: &nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <input type="checkbox"  />
              <span className="checkmark"></span>
            </label>
            <br />
            <label>
              <p type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Acepto los términos y condiciones:
              </p>
              <input type="checkbox"  />
              <span className="checkmark"></span>
            </label>
            <br />
          </div>
          <button  className="botonSubmit" type="submit">Registrar</button>
      </div>
</section>
  )
}