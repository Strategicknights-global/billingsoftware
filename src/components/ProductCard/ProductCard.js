import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.cardBody}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;