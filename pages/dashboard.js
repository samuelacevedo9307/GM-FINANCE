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
        const response = await fetch(`${server}/api/Projects`);
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
        <div className="sectionUsuario">
            {ArrProj.map((item, index) => (
              <ServiceItem key={index} id={item._id} title={item.name} description={item.description} image={item.image} rate={parseInt(item.raking, 10)} users={parseInt(item.users, 10)} />
            ))}
        </div>

        <form className="registroDash">
          <div>
            <div className="">
              <div>
                <label>
                  <i className="">Nombre completo:</i>
                </label>

                <input />
              </div>

              <div>
                <label>
                  <select className="">
                    <option value="">TI</option>
                    <option value="CC">CC</option>
                    <option value="NIT">NIT</option>
                    <option value="CE">CE</option>
                    <option value="PA">PA</option>
                  </select>
                  <i className=""></i> Número de identificación:
                </label>

                <input />
              </div>
            </div>
            <div className="">
              <div>
                <i className="">fecha de Nacimiento:</i>
                <input />
              </div>
              <div>
                <i className="">Nacionalidad:</i>

                <input />
              </div>
            </div>
            <div className="">
              <div>
                <label>
                  <i className="">Número de teléfono:</i>
                </label>
                <input />
              </div>
              <div>
                <label>
                  <i className="">Correo electrónico:</i>
                </label>
                <input />
              </div>
            </div>
            <div className="">
              <div>
                <label>
                  <i className="">Contraseña:</i>
                </label>
                <input />
              </div>
              <div>
                <label>
                  <i className="">Confirmacion Contraseña:</i>
                </label>

                <input />
              </div>
            </div>
            <div className="">
              <div>
                <label>
                  <i className="">Ocupación o profesión:</i>
                </label>
                <input />
              </div>
              <div>
                <label>
                  <i className="">Origen de fondos:</i>
                </label>
                <input />
              </div>
            </div>
            <div className="">
              <div>
                <label>
                  <i className="">Fuente de ingresos:</i>
                </label>
                <input />
              </div>
              <div>
                <label>
                  <i className="">Procedencia de los fondos:</i>
                </label>
                <input />
              </div>
            </div>
          </div>
        </form>
      </section>
    </Container>
  );
}
