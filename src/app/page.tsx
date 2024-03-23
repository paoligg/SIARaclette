"use client";
import { useEffect, useState, useRef } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

export default function Home() {
  const Tezos = new TezosToolkit("https://ghostnet.ecadinfra.com/");
  const [balance, setBalance] = useState<number>(-1);
  const walletRef = useRef<BeaconWallet | null>(null);
  const walletAdress = "tz1MBhqquMao3n6iGv34TkUsNG4cCce612X3";
  // const connectwallet = async () => {
  //   setmessage("");
  //   try {
  //     const options = {
  //       name: "ballon tz'or",
  //       network: { type: "ghostnet" },
  //     };
  //     const wallet = new beaconwallet(options);
  //     walletref.current = wallet;
  //     await wallet.requestpermissions();
  //     tezos.setprovider({ wallet: walletref.current });
  //   } catch (error : any) {
  //     console.error(error);
  //     setmessage(error.message);
  //   }
  // };
  if (balance < 0)
    Tezos.tz.getBalance(walletAdress).then((balance) => {
      console.log(`Balance: ${balance.toNumber() / 1000000} ꜩ`);
      setBalance(balance.toNumber() / 1000000);
    });
  return (
    <main className="flex">
      <div>
        <h2>The balance of wallet "{walletAdress}:"</h2>
        <p>{balance.toString()}</p>
      </div>
    </main>
  );
}
