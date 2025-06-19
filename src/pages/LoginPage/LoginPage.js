import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './AuthForm.module.css';

import { write_data } from './firebase';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const success = login({ email, password });
        if (success) {
            navigate('/');
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    try {
      await write_data(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to save data. Please try again.');
      console.error(err);
    }


    return (
        <div className={styles.authContainer}>
            <form onSubmit={handleSubmit} className={styles.authForm}>
                <h2 className={styles.title}>Login</h2>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
                <p className={styles.switchText}>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
};


export default LoginPage;