import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import React from "react";
import Container from "@/Components/Container.js";
import ServiceItem from "@/Components/ServiceItem";
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
        <div className="sectionUsuario">
          {ArrProj.length > 1 ? (
            <div className="row sectionUsuario p-3">
              {ArrProj?.map((item, index) => (
                <div className="col-lg-4 col-md-4 col-sm-5 mb-3" key={index}>
                  <ServiceItem key={index} id={item._id} title={item.name} description={item.description} image={item.image} rate={parseInt(item.raking, 10)} users={parseInt(item.users, 10)} />
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </Container>
  );
}
