import styles from './TopCompanies.module.css';
import COMPANIES from './TopCompanies.data';

const TopCompanies = () => {
  return (
    <section className={styles.topCompanies}>
      <div className='container'>
        <h2>Top Companies</h2>
        <div className={styles.grid}>
          {COMPANIES.map((company, index) => (
            <div className={styles.box} key={index}>
              <div>
                <span>
                  <span className={styles.logoWrapper}>
                    <img src={company.url} />
                  </span>
                </span>
                <p>{company.jobs} jobs</p>
                <h6>{company.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
