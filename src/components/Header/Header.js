import styles from './Header.module.scss';
import { ReactComponent as Logo } from './../../assets/icons/logo.svg';
import Navbar from './../Navbar/Navbar';
import { ReactComponent as MenuIcon } from './../../assets/icons/menu.svg';
import AccountButtons from './../AccountButtons/AccountButtons';

const Header = () => {
  return (
    <div className='container'>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <Logo className={styles.header__logo_icon} />
        </div>
        <div className={styles.header__navbar_wrapper}>
          <Navbar />
          <div className={styles.header__navbar_icon}>
            <MenuIcon className={styles.header__menu_icon} />
          </div>
        </div>
        <div className={styles.header__account_buttons_wrapper}>
          <AccountButtons />
        </div>
      </div>
    </div>
  );
};

export default Header;
