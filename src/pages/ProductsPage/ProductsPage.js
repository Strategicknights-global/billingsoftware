import React from 'react';
// This path is now correct because we moved the ProductCard folder to src/components
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductsPage.module.css';

// We have replaced the local image with live URLs from the web.
// You no longer need the 'assets' folder or a local image file.
const dummyProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d76e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id: 2, name: 'Gaming Mouse', price: 49.99, image: 'https://images.unsplash.com/photo-1615663249853-864161428078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
  { id: 3, name: 'Mechanical Keyboard', price: 129.99, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
  { id: 4, name: '4K Monitor', price: 349.99, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=80' },
  { id: 5, name: 'VR Headset', price: 299.99, image: 'https://images.unsplash.com/photo-1534437432093-6330a5b2069e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id: 6, name: 'Smartwatch', price: 199.99, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' },
];

const ProductsPage = () => {
  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.pageTitle}>Our Products</h1>
      <div className={styles.productsGrid}>
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;