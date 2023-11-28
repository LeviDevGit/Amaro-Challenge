"use client";

import { useParams } from "next/navigation";
import database from "@/app/services/products.json";
import styles from "./styles.module.css";

export default function Product() {
  const params = useParams();
  const uid = params.styleId;

  const product = database.products.find((element) => element.style == uid);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={product?.image} alt="" />
        <div className={styles.text}>
          <h1>{product?.name}</h1>
          <div className={styles.price}>
            <h2>{product?.actual_price}</h2>
            <span>{product?.installments}</span>
          </div>
          <div className={styles.color}>
            <h2>
              Cor: <span>{product?.color_slug}</span>
            </h2>
          </div>
          <div className={styles.size}>
            <h2>Tamanho:</h2>
            <div className={styles.sizeChoice}>
              {true
                ? product?.sizes.map((element, index) => {
                    return (
                      <div key={index}>
                        <button>{element.size}</button>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
