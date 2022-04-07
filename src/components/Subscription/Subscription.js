import styles from './Subscription.module.css';

const Subscription = () => {
  return (
    <section className={styles.subscription}>
      <div className='container'>
        <div className={styles.content}>
          <h2>Get The Right Job For You</h2>
          <p>
            Subscribe to get updated on latest and relevant career opportunities
          </p>
          <div>
            <input placeholder='Enter your email' />
            <div className={styles.btnWrapper}>
              <button>Subscribe</button>
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
