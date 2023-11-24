"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import database from "@/app/services/products.json";

export default function MainComponent() {
  const router = useRouter();

  const handleButtonClick = (style: string) => {
    console.log(style);
    router.push(`/c/${style}`);
  };

  return (
    <main className={styles.container}>
      <h1>Mais vendidos em Moda</h1>
      <div className={styles.list}>
        <ul>
          {true
            ? database.products.map((products) => {
                return (
                  <li className={styles.card} key={products.name}>
                    <button
                      onClick={() => {
                        handleButtonClick(products.style);
                      }}
                    >
                      <Image src={products.image} alt={products.name} />

                      <h2>{products.name}</h2>
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
