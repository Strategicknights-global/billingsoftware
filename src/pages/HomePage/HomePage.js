import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <h1>Welcome to ProShop</h1>
      <p>Your one-stop shop for the latest tech.</p>
      <Link to="/products" className={styles.button}>Shop Now</Link>
    </div>
  );
};

export default HomePage;
