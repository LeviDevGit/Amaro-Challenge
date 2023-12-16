import Image from "next/image";
import HeaderComponent from "../../_components/Header/HeaderComponent";
import styles from "./styles.module.css";
import coracao from "@/public/icons/coracao-outro-vazio.svg";

export default function WishList() {
  return (
    <>
      <HeaderComponent />
      <main className={styles.container}>
        <div className={styles.textBox}>
          <h1>Meus Desejos </h1>
          <h2>Os produtos que você mais quer</h2>
          <Image
            src={coracao}
            alt="Imagem Ilustrativa"
            width={100}
            height={100}
          />
          <h3>Você não possui nenhum desejo? Nunca é tarde para começar.</h3>
          <p>
            Para não perder seus produtos favoritos de vista é só tocar no e
            eles aparecerão nessa lista.
          </p>
          <button>IR PARA NOVIDADES</button>
        </div>
      </main>
    </>
  );
}
