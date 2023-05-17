import Head from "next/head";
import styles from "../styles/styles.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas.</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />

        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia Escreva,planeje e organize-se...
          </h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>

        <div className={styles.donaters}>
          <img src="https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=2840&quality=75&format=jpg" alt="usuario 1" />
        </div>
      </main>
    </>
  );
}
