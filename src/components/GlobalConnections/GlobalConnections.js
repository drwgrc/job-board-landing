import styles from './GlobalConnections.module.css';
import COUNTRIES from './GlobalConnections.data';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const GlobalConnections = () => {
  return (
    <section className={styles.globalConnections}>
      <div className='container'>
        <span className={styles.imgWrapper} />
        <div className={styles.text}>
          <div>
            <div className={styles.content}>
              <h2>Global Connections</h2>
              <p>
                Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla
                neque dolor, sagittis eget, iaculis quis.
              </p>
              <a href='#'>
                View All Jobs
                <span className={styles.iconWrapper}>
                  <ArrowRightAltRoundedIcon />
                </span>
                <span className={styles.styling} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {COUNTRIES.map((country, index) => {
            return (
              <div className={styles.country}>
                <div>
                  <span>
                    <span className={styles.countryWrapper}>
                      <img src={country.imgUrl} />
                    </span>
                  </span>
                </div>
                <div>
                  <h5>{country.name}</h5>
                  <p>{country.jobs} Jobs</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalConnections;
