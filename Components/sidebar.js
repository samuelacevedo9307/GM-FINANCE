import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ENSAvatar } from "web3uikit";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useMoralis } from "react-moralis";

export default function Sidebar() {
  const { data: session } = useSession();
  const nit = false;
  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis();

  /*
   *     Logica de la Web
   */
  /*
   *     Estilos del Material Ui
   */

  return (
    <>
      <div id="sidebar-container">
        <ul className="menu navbar-nav ">
          <div className="mb-1 mt-5 identicon">
            <ENSAvatar address={account} size={150} />
            {session ? (
              <>
                <p>{session?.user?.Nombre}</p>
              </>
            ) : (
              <>
                <p>GM ADMIN</p>
              </>
            )}
          </div>
          <div id="dash1" className=" align-items-center mt-5 justify-content-center">
            <li className="mb-2 nav-link inversiones">
              <Link href="/dashboard" passHref legacyBehavior>
                <a href=" ">
                  <i className="bi bi-bar-chart-fill">Market</i>
                </a>
              </Link>
            </li>
            <li className="mb-2 nav-link inversiones">
              <Link href="/Inversiones" passHref legacyBehavior>
                <a href=" ">
                  <i className="bi bi-wallet">inversiones</i>
                </a>
              </Link>
            </li>

            {session ? (
              <>
                <li className="mb-2 dash nav-link .active">
                  <Link href="/Actualizar" passHref legacyBehavior>
                    <a href="">
                      <i className="bi bi-house-door-fill">Actualizar datos</i>
                    </a>
                  </Link>
                </li>
                <li className="mb-2 nav-link kyc">
                  <Link href="/kyc" passHref legacyBehavior>
                    <a href=" ">
                      <i className="bi bi-person-circle"> Account</i>
                    </a>
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}

            <li className=" nav-link Soporte">
              <Link href="/soporte" passHref legacyBehavior>
                <a href=" ">
                  <i className="bi bi-exclamation-triangle-fill">Soporte</i>
                </a>
              </Link>
            </li>
            {nit ? (
              <>
                <li className=" nav-link Soporte">
                  <Link href="/soporte" passHref legacyBehavior>
                    <a href=" ">
                      <i className="bi bi-exclamation-triangle-fill">Proyectos</i>
                    </a>
                  </Link>
                </li>
                <li className="mb-2 dash nav-link .active">
                  <Link href="/Actualizar" passHref legacyBehavior>
                    <a href="">
                      <i className="bi bi-house-door-fill">Actualizar datos</i>
                    </a>
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
            {session ? (
              <>
                <button
                  className="botonDash"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </ul>
      </div>
    </>
  );
}
