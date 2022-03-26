import styles from './header.module.scss';
import { ReactComponent as Logo } from './../../assets/icons/logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.header__logo}>
            <Logo className={styles.header__logo_icon} />
          </div>
          <div className={styles.header__nav}>Nav</div>
          <div className={styles.header__account_info}>Account Nav</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
