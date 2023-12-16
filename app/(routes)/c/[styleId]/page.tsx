"use client";

import styles from "./styles.module.css";
import HeaderComponent from "@/app/_components/Header/HeaderComponent";
import ProductInfoComponent from "./components/ProductInfo/ProductInfoComponent";

export default function Product() {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        <ProductInfoComponent />
      </div>
    </div>
  );
}
