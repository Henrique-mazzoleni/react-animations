import Head from "next/head";

import List from "../components/List";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

import styles from "../styles/Home.module.css";
import { Fragment, useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>React Animations</title>
        <meta name="description" content="testing some React animations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showModal && (
        <Fragment>
          <Backdrop onAction={closeModalHandler} />
          <Modal onAction={closeModalHandler} />
        </Fragment>
      )}

      <header className={styles.header}>
        <h1>React Animations</h1>
      </header>

      <main className={styles.main}>
        <button onClick={openModalHandler}>Open Modal</button>
        <List />
      </main>
    </div>
  );
}
