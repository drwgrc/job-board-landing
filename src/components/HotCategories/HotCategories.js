import styles from './HotCategories.module.css';
import CATEGORIES from './HotCategories.data';
import * as icons from '@mui/icons-material';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const HotCategories = () => {
  return (
    <section className={styles.hotCategories}>
      <div className='container'>
        <h2>Hot Categories</h2>
        <div className={styles.grid}>
          {CATEGORIES.map((category, index) => {
            const Icon = icons[category.icon];
            return (
              <div key={index}>
                <div>
                  <div className={styles.iconWrapper}>
                    <Icon />
                  </div>
                  <h6>{category.title}</h6>
                  <p>{category.jobs} jobs</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.btnWrapper}>
          <button>
            View All Categories
            <span className={styles.btnIconWrapper}>
              <ArrowRightAltRoundedIcon />
            </span>
            <span className={styles.styling} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotCategories;
