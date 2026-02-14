import styles from './Header.module.css';
import caadsLogoBranca from '../../assets/caads-logo-branca.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={caadsLogoBranca} className={styles.logo} alt="CAADS Logo Branca" />
        {/* Mobile: logo + menu hamburguer */}
        {/* Desktop: logo + menu horizontal */}
        
        <button className={styles.menuButton}>☰</button>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}