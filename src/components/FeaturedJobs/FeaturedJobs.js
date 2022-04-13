import styles from './FeaturedJobs.module.css';
import JOBS from './FeaturedJobs.data';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Job from '../Job/Job';

const FeaturedJobs = () => {
  return (
    <section className={styles.featuredJobs}>
      <div className='container'>
        <div className={styles.text}>
          <div>
            <span>Featured Jobs</span>
          </div>
          <div>
            <h3>
              Jobs available! Apply to Editorial Specialist, Account Manager,
              Human Resources Specialist and more!
            </h3>
          </div>
        </div>
        <div className={styles.grid}>
          {JOBS.map((job, index) => {
            return <Job key={index} job={job} />;
          })}
        </div>
        <div className={styles.btnWrapper}>
          <button>
            View All Jobs
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

export default FeaturedJobs;
