import Head from "next/head";
import styles from "./styles.module.scss";
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from "react-icons/fi";
import { FaCalendar } from "react-icons/fa";
import SupportButton from "../../components/SupportButton";

export default function Board() {
  return (
    <>
      <Head>
        <title>Minhas tarefas - Board</title>
      </Head>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="Digite sua tarefa..." />
          <button type="submit">
            <FiPlus size={25} color="#17181f" />
          </button>
        </form>
        <h1>Você tem 2 tarefas</h1>

        <section>
          <article className={styles.taskList}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={styles.actions}>
              <div>
                <div>
                  <FaCalendar size={20} color="#FFB800" />
                  <time>17 Maio 2023</time>
                </div>
                <button>
                    <FiEdit2 size={20} color="#FFF"/>
                    <span>Editar</span>
                </button>
              </div>

              <button>
                <FiTrash size={20} color="#FF3636"/>
                <span>Excluir</span>
              </button>
            </div>
          </article>
        </section>
      </main>

      <div className={styles.vipContainer}>
        <h3>Obrigado por apoiar esse projeto.</h3>
        <div>
            <FiClock size={20} color="#FFF"/>
            <time>
                Ùltima doação foi a 3 dias.
            </time>
        </div>
      </div>

      <SupportButton/>
    </>
  );
}
