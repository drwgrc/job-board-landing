import styles from './CreateAccount.module.scss';
import { ReactComponent as Register } from './../../assets/icons/register.svg';

const CreateAccount = () => {
  return (
    <div className={styles.createAccount}>
      <div className={styles.createAccount__container}>
        <div className={styles.createAccount__textContainer}>
          <h3 className={styles.createAccount__textHeader}>
            <span className={styles.createAccount__headerColor}>Easy</span> Way
            To Get
            <br />
            Your Next <b>Job</b>!
          </h3>
          <p className={styles.createAccount__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            animi libero corporis fugit molestias obcaecati a ipsa, non
            aspernatur? Perspiciatis nam maxime aspernatur. Ratione quidem quia
            quibusdam fugiat corporis nisi?
          </p>
          <p className={styles.createAccount__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            animi libero corporis fugit molestias obcaecati a ipsa, non
            aspernatur? Perspiciatis nam maxime aspernatur. Ratione quidem quia
            quibusdam fugiat corporis nisi?
          </p>
          <a href='#' className={styles.createAccount__btn}>
            Create Account
          </a>
        </div>
        <div className={styles.createAccount__cardsContainer}>
          <div className={styles.createAccount__cardWrapper}>
            <span className={styles.createAccount__cardNumber}>1</span>
            <div className={styles.createAccount__cardContainer}>
              <Register className={styles.createAccount__cardIcon} />
              <h3 className={styles.createAccount__cardTitle}>
                Register An Account
              </h3>
              <p className={styles.createAccount__cardText}>
                Create and account here and upload your CV.
              </p>
            </div>
          </div>
          <div className={styles.createAccount__cardWrapper}>
            <span className={styles.createAccount__cardNumber}>2</span>
            <div className={styles.createAccount__cardContainer}>
              <Register className={styles.createAccount__cardIcon} />
              <h3 className={styles.createAccount__cardTitle}>
                Register An Account
              </h3>
              <p className={styles.createAccount__cardText}>
                Create and account here and upload your CV.
              </p>
            </div>
          </div>
          <div className={styles.createAccount__cardWrapper}>
            <span className={styles.createAccount__cardNumber}>3</span>
            <div className={styles.createAccount__cardContainer}>
              <Register className={styles.createAccount__cardIcon} />
              <h3 className={styles.createAccount__cardTitle}>
                Register An Account
              </h3>
              <p className={styles.createAccount__cardText}>
                Create and account here and upload your CV.
              </p>
            </div>
          </div>
          <div className={styles.createAccount__cardWrapper}>
            <span className={styles.createAccount__cardNumber}>4</span>
            <div className={styles.createAccount__cardContainer}>
              <Register className={styles.createAccount__cardIcon} />
              <h3 className={styles.createAccount__cardTitle}>
                Register An Account
              </h3>
              <p className={styles.createAccount__cardText}>
                Create and account here and upload your CV.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
