import styles from './Statistics.module.scss';

const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.statistics__container}>
        <div className={styles.statistics__vectorWrapper}>
          <div className={styles.statistics__vector} />
        </div>
        <div className={styles.statistics__textBox}>
          <h3 className={styles.statistics__header}>
            Some <b>Statistics</b> We Like To Share
          </h3>
          <p className={styles.statistics__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit
            tempora aspernatur iusto eum optio accusantium reprehenderit sed non
            aperiam, error, sint id architecto quaerat modi asperiores a unde
            aut.
          </p>
          <div className={styles.statistics__dataContainer}>
            <div className={styles.statistics__data}>
              <h4 className={styles.statistics__dataNumber}>25K</h4>
              <p className={styles.statistics__dataText}>Happy Customers</p>
            </div>
            <div className={styles.statistics__data}>
              <h4 className={styles.statistics__dataNumber}>8652</h4>
              <p className={styles.statistics__dataText}>Tickets Solved</p>
            </div>
            <div className={styles.statistics__data}>
              <h4 className={styles.statistics__dataNumber}>9/10</h4>
              <p className={styles.statistics__dataText}>Average Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
