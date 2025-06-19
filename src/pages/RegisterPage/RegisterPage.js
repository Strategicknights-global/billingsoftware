import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from '../LoginPage/AuthForm.module.css'; // Re-using the same styles

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = register({ name, email, password });
        if(success) {
            navigate('/login');
        }
    };

    return (
        <div className={styles.authContainer}>
            <form onSubmit={handleSubmit} className={styles.authForm}>
                <h2 className={styles.title}>Register</h2>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                        required
                    />
                </div>
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
                        minLength="6"
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Register</button>
                <p className={styles.switchText}>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;