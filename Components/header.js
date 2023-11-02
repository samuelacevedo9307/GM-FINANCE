import Head from "next/head";
import WalletConnect from "@/Components/ConnectionWallet";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Link from "next/link";
import Registroempresas from "@/pages/Registroempresas";
import Registro from "@/pages/Registro.js";
import LoginPage from "@/pages/login.js";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { ConnectButton } from "web3uikit";
import { useMoralis } from "react-moralis";
export default function Headlanding() {
  const { data: session } = useSession();
  const { isWeb3Enabled, account } = useMoralis();

  /*/ useEffect(() => {
    connectToWeb3();

    // Función de limpieza
    return () => {
      disconnectFromWeb3();
    };
  }, []); /*/

  return (
    <>
      <header>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" data-bs-scroll="true" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <img src="/images/gm1b.png" alt="logotipo" width={300} />
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="col ">
              <div className="botonRegistro">
                {session ? (
                  <button
                    className="hbuton2"
                    onClick={() => {
                      signOut();
                    }}
                    type="button"
                  >
                    LOG OUT
                  </button>
                ) : (
                  <>
                    <button className="botonLogin" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-controls="multiCollapseExample3" aria-expanded="false" aria-label="Toggle navigation">
                      Crear cuenta
                    </button>
                    <button className="botonLogin" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample4" aria-controls="multiCollapseExample4" aria-expanded="false" aria-label="Toggle navigation">
                      Iniciar Sesión
                    </button>
                  </>
                )}
              </div>
              <div id="miContenedorPadre">
                <div className="collapse multi-collapse" id="multiCollapseExample3" data-bs-parent="#miContenedorPadre">
                  <div className="botonRegistro">
                    <button data-bs-toggle="collapse" data-bs-target="#multiCollapseExample5" aria-controls="multiCollapseExample5" aria-expanded="false" aria-label="Toggle navigation">
                      Cuenta empresas
                    </button>

                    <button data-bs-toggle="collapse" data-bs-target="#multiCollapseExample6" aria-controls="multiCollapseExample6" aria-expanded="false" aria-label="Toggle navigation">
                      Cuenta Usuarios
                    </button>
                  </div>

                  <div className="formulario collapse multi-collapse" id="multiCollapseExample5" data-bs-parent="#multiCollapseExample3">
                    <Registroempresas />
                  </div>
                  <div className="formulario collapse multi-collapse" id="multiCollapseExample6" data-bs-parent="#multiCollapseExample3">
                    <Registro></Registro>
                  </div>
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample4" data-bs-parent="#miContenedorPadre">
                  <LoginPage></LoginPage>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="menuHead">
          <Link className="text-white" href={`/`} passHref legacyBehavior>
            <img src="/images/gm1b.png" alt="logotipo" />
          </Link>
          <div>
            <a href="#">tokenizacion</a>
            <a href="#">Ranking</a>
            <a href="#">FAQ</a>
          </div>
          {!isWeb3Enabled ? (
            <></>
          ) : (
            <>
              <Link className="text-white" href={`/dashboard`} passHref legacyBehavior>
                <a href="#">dashboard</a>
              </Link>
            </>
          )}
        </nav>
        {!isWeb3Enabled ? (
          <>
            {" "}
            <div id="botonPrincipal">
              <ConnectButton moralisAuth={false}></ConnectButton>
              <a>Conectar Wallet</a>
            </div>
            <div id="botonPrincipal">
              <button className="btn btn-primary" type="button" id="offcanvasToggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <i class="bi bi-person-fill"></i>
              </button>
              <a className="btn btn-primary" type="button" id="offcanvasToggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                Conectar Usuario
              </a>
            </div>
          </>
        ) : (
          <>
            <div id="botonPrincipal">
              <ConnectButton moralisAuth={false}></ConnectButton>
              <a>{account.slice(0, 5) + "..."+account.slice(38, 42)}</a>
            </div>
            <div id="botonPrincipal">
              <button className="btn btn-primary" type="button" id="offcanvasToggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <i class="bi bi-person-fill"></i>
              </button>
              <a  id="offcanvasToggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                Conectar Usuario
              </a>
            </div>
          </>
        )}

        <i className="fa-sharp fa-solid fa-bars" />
      </header>
    </>
  );
}
