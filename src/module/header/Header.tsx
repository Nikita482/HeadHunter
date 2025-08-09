import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src="public/logo.png" alt="Logo" />
        <h1 className={styles.title}>.FrontEnd</h1>
      </div>

      <div className={styles.header__links}>
        <a className={styles.header__link} href="#">
          Вакансии FE
        </a>

        <div className={styles.header__dot}></div>

        <button className={styles.header__btn}>
          <img src="public/user-circle.png" alt="user-circle" />
          Обо мне
        </button>
      </div>
    </header>
  );
};

export default Header;
