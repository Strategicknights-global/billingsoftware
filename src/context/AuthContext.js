import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check local storage for a logged-in user when the app loads
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        // In a real app, you'd verify credentials with a backend
        // For this demo, we'll simulate a login
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = users.find(u => u.email === userData.email && u.password === userData.password);

        if (foundUser) {
            localStorage.setItem('user', JSON.stringify(foundUser));
            setUser(foundUser);
            return true;
        }
        return false;
    };

    const register = (userData) => {
        // In a real app, you'd send this to a backend to create a new user
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.email === userData.email);

        if (userExists) {
            alert("User with this email already exists!");
            return false;
        }

        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registration successful! Please log in.");
        return true;
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const value = { user, login, logout, register };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};