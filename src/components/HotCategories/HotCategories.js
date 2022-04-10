import styles from './HotCategories.module.css';
import CATEGORIES from './HotCategories.data';
import * as icons from '@mui/icons-material';

const HotCategories = () => {
  console.log(CATEGORIES[0]);
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
      </div>
    </section>
  );
};

export default HotCategories;
