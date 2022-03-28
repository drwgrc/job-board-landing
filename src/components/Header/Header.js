import styles from './Header.module.scss';
import { ReactComponent as Logo } from './../../assets/icons/logo.svg';
import { ReactComponent as MenuIcon } from './../../assets/icons/menu.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <Logo className={styles.header__logoIcon} />
          </div>
          <nav className={styles.header__nav}>
            <a href='#' className={styles.header__link}>
              Home
            </a>
            <a href='#' className={styles.header__link}>
              Jobs
            </a>
            <a href='#' className={styles.header__link}>
              Candidates
            </a>
            <a href='#' className={styles.header__link}>
              Employers
            </a>
            <a href='#' className={styles.header__link}>
              Blog
            </a>
            <a href='#' className={styles.header__link}>
              Contact
            </a>
          </nav>
          <div className={styles.header__buttonsWrapper}>
            <a href='#' className={styles.header__loginBtn}>
              Login
            </a>
            <a href='#' className={styles.header__registerBtn}>
              Create Account
            </a>
          </div>
          <div className={styles.header__menuIconWrapper}>
            <MenuIcon className={styles.header_menuIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
