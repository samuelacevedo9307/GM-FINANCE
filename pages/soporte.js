import { Inter } from "next/font/google";
import { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta, _setAddressForMint, _getMinters } from "../Components/FunctionsContract.js";
import { useEffect } from "react";
import React from "react";
import Container from "@/Components/Container.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    $(document).ready(function () {
      var currentActive = $(".active");
      var sopor = $(".Soporte");

      if (!currentActive.is(sopor)) {
        sopor.addClass("active");
        currentActive.removeClass("active");
      }
    });

    // Add the .active class to the clicked nav-link
  }, []);

  return (
    <Container>
      <section id="soporte">
        <img src={"./contacto.JPG"}></img>
        <button>contactanos</button>
      </section>
    </Container>
  );
}
