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
        <div className="sectionUsuario">
          <div className="servicio">
              <div className="imgRank">
                <img className="token1" src="/images/imgBanner1.png" alt="token1" />
              </div>
              <h4>TOKEN</h4>
              
              <p>¡Al apoyar financieramente a empresas tokenizadas, los usuarios pueden obtener NFT de GM como recompensa!</p>
          </div>
          <div className="servicio">
              <div className="imgRank">
                <img className="token1" src="/images/imgBanner1.png" alt="token1" />
              </div>
              <h4>TOKEN</h4>
              
              <p>¡Al apoyar financieramente a empresas tokenizadas, los usuarios pueden obtener NFT de GM como recompensa!</p>
          </div>
          <div className="servicio">
              <div className="imgRank">
                <img className="token1" src="/images/imgBanner1.png" alt="token1" />
              </div>
              <h4>TOKEN</h4>
              
              <p>¡Al apoyar financieramente a empresas tokenizadas, los usuarios pueden obtener NFT de GM como recompensa!</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
