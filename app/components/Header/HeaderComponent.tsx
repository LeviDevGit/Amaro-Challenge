import Image from "next/image";
import HeaderLogo from "@/public/logo.svg";
import HeaderSearchIcon from "@/public/icons/procurar.svg";
import HeaderHeartIcon from "@/public/icons/coracao.svg";
import HeaderCartIcon from "@/public/icons/carrinho.svg";
import styles from "./styles.module.css";

export default function HeaderComponents() {
  return (
    <header className={styles.container}>
      <div className={styles.container_primary}>
        <div>
          <Image
            src={HeaderLogo}
            alt="AMARO"
            width={150}
            height={28}
            title="AMARO | o melhor da moda, beleza, bem-estar e casa"
          />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="O que você está procurando?" />
          <button>
            <Image
              src={HeaderSearchIcon}
              alt="Busca"
              width={22}
              title="Busca"
            />
          </button>
        </div>
      </div>
      <div className={styles.container_secondary}>
        <div>
          <Image
            src={HeaderHeartIcon}
            alt="Desejos"
            width={30}
            title="Lista de desejos"
          />
          <h2>Meus desejos</h2>
        </div>
        <div>
          <Image
            src={HeaderCartIcon}
            alt="Carrinho"
            width={30}
            title="Seu Carrinho"
          />
        </div>
      </div>
    </header>
  );
}
