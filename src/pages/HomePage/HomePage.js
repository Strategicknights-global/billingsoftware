import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Welcome to ProShop</h1>
        <p className={styles.subtitle}>Your one-stop shop for the latest and greatest tech.</p>
        <Link to="/products" className={styles.ctaButton}>Shop Now</Link>
      </div>
    </div>
  );
};

export default HomePage;