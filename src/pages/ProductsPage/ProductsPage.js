import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductsPage.module.css';

const products = [
  { id: 1, name: 'Headphones', price: 99.99, image: 'https://source.unsplash.com/300x200/?headphones' },
  { id: 2, name: 'Keyboard', price: 129.99, image: 'https://source.unsplash.com/300x200/?keyboard' },
  { id: 3, name: 'Mouse', price: 49.99, image: 'https://source.unsplash.com/300x200/?mouse' },
];

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
