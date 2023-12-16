"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import database from "@/app/services/products.json";
import coracaoVazio from "@/public/icons/coracao.svg";
import Image from "next/image";

export default function MainComponent() {
  const router = useRouter();

  const handleButtonClick = (style: string) => {
    router.push(`/c/${style}`);
  };

  return (
    <main className={styles.container}>
      <h1>Roupas Femininas</h1>
      <div className={styles.list}>
        <ul>
          {true
            ? database.products.map((product, index) => {
                if (product.image == "")
                  product.image =
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637";

                return (
                  <li className={styles.card} key={index}>
                    <button className={styles.wishlist}>
                      <Image
                        src={coracaoVazio}
                        alt="Lista de desejos"
                        title="Adicionar a sua lista de desejos"
                        width={36}
                        height={30}
                      />
                    </button>
                    <button
                      className={styles.product}
                      onClick={() => {
                        handleButtonClick(product.style);
                      }}
                    >
                      <div className={styles.productImage}>
                        <img src={product.image} alt={product.name} />
                      </div>

                      <h2>{product.name}</h2>
                      <div className={styles.discount}>
                        <h3>R$ 99,90</h3>
                        <span>R$ 199,90</span>
                      </div>
                      <h4>2x R$ 49,95</h4>
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </main>
  );
}
