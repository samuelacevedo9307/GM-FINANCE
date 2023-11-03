import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";
import WalletConnect from "@/Components/ConnectionWallet";
import { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta } from "./FunctionsContract.js";
import { useState } from "react";
import Images from "next/image";
import Link from "next/link";
import MiNFT from "../contracts/abi.json";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Nftmodal() {
  const [data, setdata] = useState(false);
  const [mintbool, setmintbool] = useState(false);

  const contractAddress = "0x754BD28BF6750b26DDAA5E5f1E508620A80C833a";
  const abi = MiNFT.abi;

  const { chainId: chainIdHex, account, isWeb3Enabled, Moralis } = useMoralis();

  const { runContractFunction: mint } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "mint",
    params: {},
    gasLimit: 500000 // Establecer el límite de gas aquí
  });

  const { runContractFunction: getMeta } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getTokenMetadata",
    params: { _address: account },
    gasLimit: 500000 // Establecer el límite de gas aquí
  });

  const mintNFT = async () => {
    try {
      const res = await mint({
        onSuccess: handleSuccessApprove,
        onError: (error) => {
          console.log("hubo un error: " + error);
        },
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSuccessApprove = async (tx) => {
    await tx.wait(1);
    try {
      const res = await getMeta();
      const bdata = [res[0].toNumber(), res[1], res[2].toNumber()];
      console.log(bdata);
      setdata(bdata);
      setmintbool(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div class="modal fade" id="miModal" tabindex="-1" aria-labelledby="miModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="miModalLabel">
                Get your Reward
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {!mintbool == true ? (
                <div className="usuario">
                  <div className="comentario1">
                    <h2>Claim</h2>
                    <img src="/images/regalo.png" width={130} alt="logotipo" />
                    <p>Get your Nft</p>
                    <button onClick={mintNFT}>Mint</button>
                  </div>
                </div>
              ) : (
                <div className="usuario">
                  <div className="comentario1">
                    <h2>Congrats</h2>
                    <img src={data[1]} width={200}></img>
                    <p>you Mint successfuly </p>
                    <p>Id {data[0]} </p>
                    <p>Rarity {data[2]} </p>
                  </div>
                </div>
              )}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
