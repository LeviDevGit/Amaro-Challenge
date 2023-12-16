import { useParams } from "next/navigation";
import database from "@/app/services/products.json";
import coracaoVazio from "@/public/icons/coracao.svg";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

export default function ProductInfoComponent() {
  const [size, setSize] = useState<null | number>(null);

  const params = useParams();
  const uid = params.styleId;

  const product = database.products.find((element) => element.style == uid);

  const toggleSize = (index: number) => {
    setSize(index);
  };

  return (
    <div className={styles.info}>
      <div className={styles.image}>
        <img src={product?.image} alt="" />
      </div>
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
                  if (element.available) {
                    return (
                      <button
                        key={index}
                        className={
                          size == index ? styles.sizeAvailable : undefined
                        }
                        onClick={() => {
                          toggleSize(index);
                        }}
                      >
                        <h3>{element.size}</h3>
                      </button>
                    );
                  } else {
                    return (
                      <button
                        key={index}
                        className={styles.sizeUnavailable}
                        disabled
                      >
                        <hr />
                        <h3>{element.size}</h3>
                      </button>
                    );
                  }
                })
              : null}
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.buyButton}>Comprar</button>
          <button className={styles.wishButton}>
            <Image
              src={coracaoVazio}
              alt="Lista de desejos"
              title="Adicionar a sua lista de desejos"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
