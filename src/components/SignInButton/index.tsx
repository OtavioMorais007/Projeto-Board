import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  
    const session = true;

  return session ? (
    <button type="button" className={styles.signInButton} onClick={() => {}}>
      <img src="https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=2840&quality=75&format=jpg" alt="Foto do usuario" />
      Olá Steve
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => {}}>
      <FaGithub color="#FFB800" />
      Entrar com github
    </button>
  );
}
