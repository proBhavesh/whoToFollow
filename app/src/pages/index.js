import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Meta from "../components/Meta.js";
import Navbar from "../components/Navbar.js";

export default function Home() {
  return (
    <>
      <Meta />
      <Navbar />
    </>
  );
}
