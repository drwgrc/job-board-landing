import styles from './TopCategories.module.scss';

const TopCategories = () => {
  return (
    <div className={styles.topCategories}>
      <div className={styles.topCategories__container}>
        <div className={styles.topCategories__headerContainer}>
          <h3 className={styles.topCategories__header}>
            Browse{' '}
            <span className={styles.topCategories__headerColor}>Top</span>{' '}
            Categories
          </h3>
          <p className={styles.topCategories__headerText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            cupiditate dolorem praesentium voluptate voluptatibus eos quos,
            maxime sint soluta placeat sed.
          </p>
        </div>
        <div className={styles.topCategories__categoriesContainer}>
          <div className={styles.topCategories__categoryCard}>
            <div className={styles.topCategories__categoryIcon}>Icon</div>
            <div className={styles.topCategories__categoryText}>
              <h4 className={styles.topCategories__categoryTitle}>
                Marketing & Communication
              </h4>
              <p className={styles.topCategories__categoryAvailability}>
                237 Jobs Available
              </p>
            </div>
          </div>
          <div className={styles.topCategories__categoryCard}>
            <div className={styles.topCategories__categoryIcon}>Icon</div>
            <div className={styles.topCategories__categoryText}>
              <h4 className={styles.topCategories__categoryTitle}>
                Marketing & Communication
              </h4>
              <p className={styles.topCategories__categoryAvailability}>
                237 Jobs Available
              </p>
            </div>
          </div>
          <div className={styles.topCategories__categoryCard}>
            <div className={styles.topCategories__categoryIcon}>Icon</div>
            <div className={styles.topCategories__categoryText}>
              <h4 className={styles.topCategories__categoryTitle}>
                Marketing & Communication
              </h4>
              <p className={styles.topCategories__categoryAvailability}>
                237 Jobs Available
              </p>
            </div>
          </div>
          <div className={styles.topCategories__categoryCard}>
            <div className={styles.topCategories__categoryIcon}>Icon</div>
            <div className={styles.topCategories__categoryText}>
              <h4 className={styles.topCategories__categoryTitle}>
                Marketing & Communication
              </h4>
              <p className={styles.topCategories__categoryAvailability}>
                237 Jobs Available
              </p>
            </div>
          </div>
          <div className={styles.topCategories__categoryCard}>
            <div className={styles.topCategories__categoryIcon}>Icon</div>
            <div className={styles.topCategories__categoryText}>
              <h4 className={styles.topCategories__categoryTitle}>
                Marketing & Communication
              </h4>
              <p className={styles.topCategories__categoryAvailability}>
                237 Jobs Available
              </p>
            </div>
          </div>
          <div className={styles.topCategories__categoryCard}>
            <div className={styles.topCategories__categoryIcon}>Icon</div>
            <div className={styles.topCategories__categoryText}>
              <h4 className={styles.topCategories__categoryTitle}>
                Marketing & Communication
              </h4>
              <p className={styles.topCategories__categoryAvailability}>
                237 Jobs Available
              </p>
            </div>
          </div>
          <div className={styles.topCategories__categoryCard}>
            <div className={styles.topCategories__categoryIcon}>Icon</div>
            <div className={styles.topCategories__categoryText}>
              <h4 className={styles.topCategories__categoryTitle}>
                Marketing & Communication
              </h4>
              <p className={styles.topCategories__categoryAvailability}>
                237 Jobs Available
              </p>
            </div>
          </div>
          <div className={styles.topCategories__categoryCard}>
            <div className={styles.topCategories__categoryIcon}>Icon</div>
            <div className={styles.topCategories__categoryText}>
              <h4 className={styles.topCategories__categoryTitle}>
                Marketing & Communication
              </h4>
              <p className={styles.topCategories__categoryAvailability}>
                237 Jobs Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
