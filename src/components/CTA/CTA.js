import styles from './CTA.module.scss';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.cta__container}>
        <div className={styles.cta__textBox}>
          <div className={styles.cta__text}>
            Start your future journey here
            <br />
            It's easy to find dream job.
          </div>
          <div className={styles.cta__btnWrapper}>
            <a className={styles.cta__btn} href='#'>
              Create Free Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
