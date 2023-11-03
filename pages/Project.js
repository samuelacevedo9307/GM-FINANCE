import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import axios from "axios";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useSession, updateUser } from "next-auth/react";
import ServiceItem from "@/Components/ServiceItem";
import Head from "next/head";
import Container from "@/Components/Container.js";
import { abi2, contractAddresses2 } from "../constants/usd/index";
import abi from "../constants/abi/abi";
//contratos

// Material Ui

export default function Moralisget() {
  let template = {
    _id: "",
    name: "",
    description: "",
    image: "",
    users: "",
    raking: "",
    token: "",
  };

  const router = useRouter();
  const { data: session } = useSession();
  const { update } = useSession();
  const [ArrProj, setArrProj] = useState(template);
  const [contract, setcontract] = useState("");
  const [amount, setamount] = useState("");

  /*
   *       Configuracion inicial de Moralis
   */
  const { chainId: chainIdHex, account, isWeb3Enabled, Moralis } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const usdAddress = chainId in contractAddresses2 ? contractAddresses2[chainId][0] : null;

  const { runContractFunction: Comprar } = useWeb3Contract({
    abi: abi,
    contractAddress: ArrProj.token,
    functionName: "mint",
    params: { amount: amount * 1000000 },
  });

  const { runContractFunction: approveusdc } = useWeb3Contract({
    abi: abi2,
    contractAddress: usdAddress,
    functionName: "approve",
    params: { spender: ArrProj.token, value: amount * 1000000 },
  });

  useEffect(() => {
    const server = process.env.NEXT_PUBLIC_SERVER;
    const loadNftData = async () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get("id");
      try {
        const response = await fetch(`/api/Projects/${id}`);
        const data = await response.json();
        setArrProj(JSON.parse(JSON.stringify(data)));
        console.log(JSON.parse(JSON.stringify(ArrProj)));
        setcontract(ArrProj.token);
        console.log(ArrProj.token);
      } catch (error) {
        console.error(error);
      }
    };
    loadNftData();
  }, []);

  const mint = async (e) => {
    e.preventDefault();
    alert("Por favor aprueba el valor exacto del token en USDT");
    const res = await approveusdc({
      onSuccess: handleSuccessApprove,
      onError: (error) => {
        console.log("hubo un error: " + error);
      },
    });
  };
  const handleSuccess = async (tx) => {
    await tx.wait(1);
    alert("You have minted your Token, you can see it in the PoligonScan.");
  };

  const handleSuccessApprove = async (tx) => {
    await tx.wait(1);
    const res = await Comprar({
      onSuccess: handleSuccess,
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  const handlerVote = async (rank, event) => {
    const server = process.env.NEXT_PUBLIC_SERVER;
    console.log(rank);
    try {
      const response = await fetch(`/api/Projects/${ArrProj._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          users: parseInt(ArrProj.users) + 1,
          raking: parseInt(ArrProj.raking) + rank,
        }),
      });
      if (!response.ok) {
        throw new Error(response);
      }
      alert("calificacion exitosa");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>GMProject</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section id="dash">
          <div className="container-fluid">
            {/* Page Heading */}
            <div >
              <h1 className="w-100">{ArrProj.name}</h1>
            </div>
            {/* Content Row */}
            <div className="row d-flex  w-100 justify-content-between">
              {/* Earnings (Monthly) Card Example */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Earnings (Monthly) Card Example */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Earnings (Monthly) Card Example */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                          </div>
                          <div className="col">
                            <div className="progress progress-sm mr-2">
                              <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pending Requests Card Example */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Ranking</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {" "}
                          <div className="star-rating">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <a
                                key={index}
                                onClick={(e) => {
                                  handlerVote(index + 1, e);
                                }}
                                className={`star ${index < ArrProj.raking / ArrProj.users ? "rated" : ""}`}
                              >
                                &#9733;
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content Row */}

            {/* Content Row */}
            <div className="row">
              {/* Content Column */}
              <div className="col-lg-6 mb-4">
                {/* Illustrations */}
                <div className="card shadow mb-4 h-100">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Token</h6>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem", height: "20rem" }} src={ArrProj.image} alt="..." />
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                {/* Approach */}
                <div className="row">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Descripcion</h6>
                  </div>
                  <div className="card-body">
                    <p>{ArrProj.description}.</p>
                    <p>Contrato: {ArrProj.token}.</p>
                    <div className="col-lg-12 col-md-12">
                      <form onSubmit={mint}>
                        <label>Comprar Tokens</label>
                        <br />
                        <input className=" form-control mt-1 w-100" type="number" value={amount} onChange={(e) => setamount(e.target.value)} />
                        <br />
                        <button type="submit" className=" w-100 btn-primary mt-1">
                          COMPRAR
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="card shadow h-100">
                  <div className="card-header py-3 ">
                    <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                  </div>
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Varius vel pharetra vel turpis. Amet porttitor eget dolor morbi non arcu risus.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
