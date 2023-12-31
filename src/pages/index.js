import Head from "next/head";

import Practise from "@/components/home/prac/Practise";
import FourBox from "@/components/home/fourBox/FourBox";
import OurPurpose from "@/components/home/ourPurpose/OurPurpose";
import OnlyImg from "@/components/onlyImg/OnlyImg";
import UpperFoot from "@/components/upperFoot/UpperFoot";
import Transportation from "./transportation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <Practise />
      <FourBox />
      <OurPurpose />
      <OnlyImg />
     
      </>
  );
}
