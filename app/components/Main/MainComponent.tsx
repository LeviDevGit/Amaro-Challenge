"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import database from "@/app/services/products.json";

export default function MainComponent() {
  const router = useRouter();

  const handleButtonClick = (style: string) => {
    router.push(`/c/${style}`);
  };

  return (
    <main className={styles.container}>
      <h1>Mais vendidos em Moda Feminina</h1>
      <div className={styles.list}>
        <ul>
          {true
            ? database.products.map((product, index) => {
                if (product.image == "")
                  product.image =
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637";

                return (
                  <li className={styles.card} key={index}>
                    <button
                      onClick={() => {
                        handleButtonClick(product.style);
                      }}
                    >
                      <img src={product.image} alt={product.name} />

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
