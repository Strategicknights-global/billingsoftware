import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>ProShop</NavLink>
      <ul className={styles.navLinks}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
        <li><NavLink to="/products" className={({ isActive }) => isActive ? styles.active : ''}>Products</NavLink></li>
      </ul>
      <div className={styles.authLinks}>
        {user ? (
          <>
            <span className={styles.welcomeText}>Welcome, {user.name}</span>
            <button onClick={handleLogout} className={styles.authButton}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={styles.authButton}>Login</NavLink>
            <NavLink to="/register" className={`${styles.authButton} ${styles.registerButton}`}>Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;