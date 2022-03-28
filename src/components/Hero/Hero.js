import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__textContainer}>
          <h3 className={styles.hero__header}>
            +25,000 Jobs Are Posted Daily
            <br />
            Find Your Dream One Here!
          </h3>
          <p className={styles.header__subHeader}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            assumenda, perspiciatis non nulla iure accusantium dignissimos
            aperiam tenetur dolore aliquid consequatur porro mollitia fuga optio
            rerum et velit veniam quos.
          </p>
        </div>
        <div className={styles.hero__jobSearchBox}>Job Search</div>
        <div className={styles.hero__partnersWrapper}>
          <h3 className={styles.hero__partnersTitle}>We Are Trusted By</h3>
          <div className={styles.hero__partnersBrands}>
            <div className={styles.hero__partnerBrand}>Etsy</div>
            <div className={styles.hero__partnerBrand}>Google</div>
            <div className={styles.hero__partnerBrand}>Slack</div>
            <div className={styles.hero__partnerBrand}>Microsoft</div>
            <div className={styles.hero__partnerBrand}>eBay</div>
            <div className={styles.hero__partnerBrand}>Amazon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
