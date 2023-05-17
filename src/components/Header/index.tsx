import Link from "next/link";
import styles from "./styles.module.scss";
import { SignInButton } from '../SignInButton'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo Meu Board" />
        </Link>
        <nav>
          <Link href="/">
            <h4>Home</h4>
          </Link>
          <Link href="/board">
            <h4>Meu board</h4>
          </Link>
        </nav>

        <SignInButton/>
      </div>
    </header>
  );
}
