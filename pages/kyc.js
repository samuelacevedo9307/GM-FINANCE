import Container from "@/Components/Container";
import Link from "next/link";
import { ENSAvatar } from "web3uikit";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useMoralis } from "react-moralis";

export default function Settings() {
  const { data: session } = useSession();
  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis();
  useEffect(() => {
    $(document).ready(function () {
      var currentActive = $(".active");
      var kyc = $(".kyc");

      if (!currentActive.is(kyc)) {
        kyc.addClass("active");
        currentActive.removeClass("active");
      }
    });

    // Add the .active class to the clicked nav-link
  }, []);

  return (
    <>
      {/*-------------hero--------------------*/}
      <Container>
        <section id="dash">
          <h2>Datos generales</h2>
          <ENSAvatar address={account} size={125} />

          <p>{session?.user?.Nombre}</p>
          <p>{session?.user?.identificacion}</p>
          <p>{session?.user?.email}</p>
          <p>{session?.user?.Nacionalidad}</p>
          {session?.user?.telefono}
          <Link href="/Actualizar" passHref legacyBehavior>
            <button className="btn btn-dark">editar Perfil</button>
          </Link>
        </section>
      </Container>
    </>
  );
}
