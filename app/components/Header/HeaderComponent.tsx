import Image from "next/image";
import HeaderLogo from "@/public/logo.svg";
import HeaderLogoResp from "@/public/logo-resp.png";
import HeaderSearchIcon from "@/public/icons/procurar.svg";
import HeaderHeartIcon from "@/public/icons/coracao.svg";
import HeaderCartIcon from "@/public/icons/carrinho.svg";
import HeaderMenuIcon from "@/public/icons/menu.svg";
import styles from "./styles.module.css";

export default function HeaderComponents() {
  return (
    <header className={styles.container}>
      <div className={styles.container_primary}>
        <div className={styles.logo_image}>
          <Image
            className={styles.Teste1}
            src={HeaderLogo}
            alt="AMARO"
            width={150}
            height={28}
            title="AMARO | o melhor da moda, beleza, bem-estar e casa"
          />
          <Image
            className={styles.Teste2}
            src={HeaderLogoResp}
            alt="AMARO"
            width={28}
            height={28}
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
        <div className={styles.menu_open}>
          <div>
            <button>
              <Image
                src={HeaderHeartIcon}
                alt="Desejos"
                width={30}
                title="Lista de desejos"
              />
              <h2>Meus desejos</h2>
            </button>
          </div>
          <div>
            <button>
              <Image
                src={HeaderCartIcon}
                alt="Carrinho"
                width={30}
                title="Seu Carrinho"
              />
            </button>
          </div>
        </div>
        <div className={styles.menu_closed}>
          <button>
            <Image src={HeaderMenuIcon} alt="Menu" width={30} title="Menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
