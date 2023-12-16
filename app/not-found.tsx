import Link from "next/link";
import styles from "./_styles/not-found.module.css";
import HeaderComponent from "./_components/Header/HeaderComponent";

export default function NotFound() {
  return (
    <>
      <HeaderComponent />
      <div className={styles.container}>
        <img
          src="https://images.prismic.io/amaro/bc486d6adf1873583ab13bb3accb400e006567a0_20191016-amaro-website-error-404_01.jpg?auto=compress,format"
          alt="Imagem de fundo"
        />
        <div className={styles.errorText}>
          <h1>404</h1>
          <h2>Página não encontrada</h2>
          <Link href="/">IR PARA NOVIDADES</Link>
        </div>
      </div>
    </>
  );
}
