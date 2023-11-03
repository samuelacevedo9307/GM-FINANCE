import { Inter } from "next/font/google";
import { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta, _setAddressForMint, _getMinters } from "../Components/FunctionsContract.js";
import { useEffect } from "react";
import React from "react";
import Container from "@/Components/Container.js";
import ServiceItem from "@/Components/ServiceItem";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [ArrProj, setArrProj] = useState([]);

  useEffect(() => {
    const server = process.env.NEXT_PUBLIC_SERVER;
    const loadData = async () => {
      try {
        const response = await fetch(`/api/Projects`);
        const data = await response.json();
        setArrProj(JSON.parse(JSON.stringify(data)));
        console.log(JSON.parse(JSON.stringify(data)));
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <Container>
    <section id="dash">
      <div className="dashAdmin">
          <h1>Consultar usuarios</h1>
      </div>
        <div className="busqueda">
          <div>
            <label>
              DNI
            </label>
          </div>
            <input type="text"></input>
          <div>
            <button>Buscar</button>
          </div>
          <div>
            <label>
              Nombre
            </label>
            <p>xxxxx</p>
          </div>
          <div>
            <label>
              Identificación:
            </label>
            <p>xxxx</p>
          </div>
          <div>
            <label>
              Telefono:
            </label>
            <p>xxxx</p>
          </div>
          <div>
            <label>
              Email:
            </label>
            <p>xxxxxxxxxx</p>
          </div>
          <div>
            <label>
            Ocupacion:
            </label>
            <p>xxxxxxx</p>
          </div>
          <div>
            <label>
            Nacionalidad:
            </label>
            <p>xxxxxx</p>
          </div>
          <div>
            <label>
            Fecha de nacimiento:
            </label>
            <p>xxxxxxx</p>
          </div>
          <div>
            <button>Eliminar</button>
          </div>
        </div>
        {/*------consulta empresa-------*/ }
      <div className="dashAdmin">
          <h1>Consultar empresas</h1>
      </div>
        <div className="busqueda">
          <div>
            <label>
              DNI
            </label>
          </div>
            <input type="text"></input>
          <div>
            <button>Buscar</button>
          </div>
          <div>
            <label>
            Nombre de la empresa:
            </label>
            <p>xxxxx</p>
          </div>
          <div>
            <label>
            
            Número de identificación fiscal (DNI):
            </label>
            <p>xxxx</p>
          </div>
          <div>
            <label>
            Fecha de constitución:
            </label>
            <p>xxxx</p>
          </div>
          <div>
            <label>
          
            Número de registro:
            </label>
            <p>xxxxxxxxxx</p>
          </div>
          <div>
            <label>
            País de constitución:
            </label>
            <p>xxxxxxx</p>
          </div>
          <div>
            <label>
            Tipo de entidad legal:
            </label>
            <p>xxxxxx</p>
          </div>
          <div>
            <label>
            Dirección legal:
            </label>
            <p>xxxxxxx</p>
          </div>
          <div>
            <button>Eliminar</button>
          </div>
        </div>
        {/*------proyectos consultar editar crear -------*/ }
      <div className="dashAdmin">
          <h1>Consultar proyectos</h1>
      </div>
        <div className="busqueda">
          <div>
            <label>
              DNI
            </label>
          </div>
            <input type="text"></input>
          <div>
            <button>Buscar</button>
          </div>
          <div>
            <label>
            Nombre de la empresa:
            </label>
            <p>xxxxx</p>
          </div>
          <div>
            <label>
            
            Número de identificación fiscal (DNI):
            </label>
            <p>xxxx</p>
          </div>
          <div>
            <label>
            Fecha de constitución:
            </label>
            <p>xxxx</p>
          </div>
          <div>
            <label>
          
            Número de registro:
            </label>
            <p>xxxxxxxxxx</p>
          </div>
          <div>
            <label>
            País de constitución:
            </label>
            <p>xxxxxxx</p>
          </div>
          <div>
            <label>
            Tipo de entidad legal:
            </label>
            <p>xxxxxx</p>
          </div>
          <div>
            <label>
            Dirección legal:
            </label>
            <p>xxxxxxx</p>
          </div>
          <div>
            <button>Eliminar</button>
          </div>
        </div>
      {/*------editar proyecto-------*/ }
      <div className="dashAdmin">
          <h1>Editar proyecto</h1>
      </div>
      {/*------crear proyecto-------*/ }
        <div className="dashAdmin">
            <h1>Crear proyecto</h1>
        </div>
      <div className="crearProyecto">
        <div>
            <label>
              <i className="">Supply:</i>
            </label>
            <input></input>          
        </div>
        <div>
            <label>
              <i className="">Simbolo:</i>
            </label>
            <input></input>          
        </div>
        <div>
            <label>
              <i className="">Nombre:</i>
            </label>
            <input></input>          
        </div>
        <div>
            <label>
              <i className="">Decimales:</i>
            </label>
            <input></input>          
        </div>
        <button>Crear</button>
      </div>

      <div>
          <div>
            <img src="/images/imgBanner3.png"></img>
          </div>
      </div>
      </section>
    </Container>
  );
}
