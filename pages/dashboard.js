import { Inter } from "next/font/google";
import { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta, _setAddressForMint, _getMinters } from "../Components/FunctionsContract.js";
import { useEffect } from "react";
import React from "react";
import Container from "@/Components/Container.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    const existingChart = Chart.getChart(ctx);
    $(document).ready(function() {
      var currentActive = $(".active");
      var dash = $(".dash");
    
      if (!currentActive.is(dash)) {
        dash.addClass("active");
        currentActive.removeClass("active");
      }
    });
    

    if (existingChart) {
      existingChart.destroy();
    }
    const plugin = {
      id: "customCanvasBackgroundColor",
      beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = options.color || "#99ffff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2017-1", "2017-2", "2017-3", "2017-4", "2017-5", "2017-6"],
        datasets: [
          {
            label: false,
            data: [500, 1250, 900, 1700, 800, 2000],
            borderWidth: 1,
            borderColor: "rgb(225,0,0)",
            backgroundColor: "rgb(0,0,0,0.1)",
            fill: "origin",
            pointRadius: 0, // 0: fill to 'origin'
          },
        ],
      },
      options: {
        plugins: {
          customCanvasBackgroundColor: {
            color: "lightGreen",
          },
        },
        plugins: [plugin],
      },
    });
  }, []);

  return (
    <Container>
      <section id="dash">
        <canvas id="myChart"></canvas>
        
        <form>
            <div>
              <div className="">
                <div >
                  <label>
                    <i className="">Nombre completo:</i> 
                  </label>
                  
                  <input />
                </div>
                 
                <div >
                  <label>
                  <select className="" >
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
