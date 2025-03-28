import React from 'react';
import styles from './Header.module.css';
import logo from './logo.png'; 

const Header = ({ onSearch }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Agroger" className={styles.logoImage} />
      </div>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar sessão..."
          className={styles.searchInput}
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;