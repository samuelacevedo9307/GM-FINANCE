import Image from "next/image";
import { Inter } from "next/font/google";
import Headlanding from "@/Components/Headlanding.js";
import Footer from "@/Components/Footer";
import WalletConnect from "@/Components/ConnectionWallet";
import { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta, _setAddressForMint, _getMinters } from "../Components/FunctionsContract.js";
import { useState } from "react";
import Images from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [adressbool, setadressbool] = useState(false);
  const [mintbool, setmintbool] = useState(false);
  async function startMint() {
    const result = await _mintNFT("Gm", "Phase 1", "https://www.construyehogar.com/wp-content/uploads/2014/06/Plano-de-apartamento-peque%C3%B1o-moderno-Tiziana-Caroleo-en-Pinterest.jpg")
      .then((e) => {
        console.log(e);
        setmintbool(true);
        setadressbool(false);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function SetActive() {
    const result = await _setActive(true)
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function GetWalletTokens() {
    const result = await _getwalletTokens()
      .then((e) => {
        console.log(e);
        return e;
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }

  async function GetTokenMetadata() {
    const result = await _getTokenMeta()
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function SetAddressForMint() {
    const result = await _setAddressForMint()
      .then((e) => {
        console.log(e);
        setadressbool(false);
        setmintbool(false);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function GetMinters() {
    const result = await _getMinters()
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }

  return (
    <div>
      <Headlanding />
      <header>
        <img src="/images/Logo GM Finance.svg" alt="logotipo" />
        <div></div>
        <nav className="menu">
          <a href="#">tokenizacion</a>
          <a href="#">Ranking</a>
          <a href="#">FAQ</a>
        </nav>
        <WalletConnect />
        <i className="fa-sharp fa-solid fa-bars" />
      </header>

      <section className="usuario">
        {!adressbool ? (
          <>
            <div className="comentario1">
              <h2>Set Address</h2>
              <p>Send your wallet for mint</p>
              <button onClick={SetAddressForMint}>Set</button>
            </div>

          </>
          
        ) : (
          <>
            {!mintbool == true ? (
              <>
                <div className="comentario1">
                  <h2>Claim</h2>
                  <img src="https://www.forbes.com/advisor/wp-content/uploads/2022/08/bored_ape_yacht_club.jpeg-1.jpg" alt="logotipo" />
                  <p>Get your Nft</p>
                  <button onClick={startMint}>Mint</button>
                </div>
              </>
            ) : (
              <>
                <div className="comentario1">
                  <h2>Congrats</h2>
                  <p>you Mint successfuly</p>
                  <Link href={`/`}>
                    <button className="" type="button">
                      Volver al Inicio
                    </button>
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
