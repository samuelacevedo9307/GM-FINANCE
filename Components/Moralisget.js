import React, { useState, useEffect } from "react";
import { useWeb3Contract } from "react-moralis";
import abi from "../constants/abi/abi";
import Link from "next/link";

const Moralisget = ({ id, title, description, image, wallet, contract }) => {
  const [tokens, setTokens] = useState(0);

  const { runContractFunction: getTokens } = useWeb3Contract({
    abi: abi,
    contractAddress: contract,
    functionName: "balanceOf",
    params: { account: wallet },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTokens();
        setTokens(res.toNumber());
        console.log(res.toNumber());
      } catch (error) {
        console.error("Error fetching token balance:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {tokens > 0 ? (
        <>
          <a className="servicio">
            <Link href={`/Project?id=${id}`} passHref legacyBehavior>
              <div className="imgRank">
                <img className="token1" src={image} alt="token1" />
              </div>
            </Link>
            <p>Token Balance: {tokens/1000000}</p>
            <Link href={`/Project?id=${id}`} passHref legacyBehavior>
              <>
                <h4>{title}</h4>
                <p>{description}</p>
              </>
            </Link>
          </a>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Moralisget;
