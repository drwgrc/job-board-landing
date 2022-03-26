import styles from './AccountButtons.module.scss';

const AccountButtons = () => {
  return (
    <div className={styles.account_buttons}>
      <a className={styles.account_buttons__login_btn}>Login</a>
      <a className={styles.account_buttons__register_btn}>Create Account</a>
    </div>
  );
};

export default AccountButtons;
