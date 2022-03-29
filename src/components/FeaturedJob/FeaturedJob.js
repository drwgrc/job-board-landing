import styles from './FeaturedJob.module.scss';
import candidateImg from './../../assets/images/featured-job-img.jpg';

const FeaturedJob = () => {
  return (
    <div className={styles.featuredJob}>
      <div className={styles.featuredJob__container}>
        <div className={styles.featuredJob__jobText}>
          <h3 className={styles.featuredJob__jobTitle}>
            Featured{' '}
            <span className={styles.featuredJob__jobTitleColor}>Job</span>
          </h3>
          <div className={styles.featuredJob__jobDescriptionContainer}>
            <div className={styles.featuredJob__jobDescriptionIcon}>A</div>
            <div className={styles.featuredJob__jobDescriptionRow}>
              <p className={styles.featuredJob__jobCompany}>Amazon</p>
              <p className={styles.featuredJob__jobDays}>2 days ago</p>
            </div>
            <div className={styles.featuredJob__jobType}>Full Time</div>
          </div>
          <h2 className={styles.featuredJob__jobHeader}>
            Area Manager - Chemical Manufacturing
          </h2>
          <p className={styles.featuredJob__jobSubHeader}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            delectus omnis error tempora ipsam. Tenetur, sequi. Architecto, quo
            quibusdam facilis, natus neque optio libero, quod ratione non
            dolores quos! Rerum!
          </p>
          <a href='#' className={styles.featuredJob__applyBtn}>
            Create Account
          </a>
        </div>
        <div className={styles.featuredJob__jobInfographics}>
          <div className={styles.featuredJob__jobInfographicImgWrapper}>
            <img
              src={candidateImg}
              className={styles.featuredJob__jobInfographicImg}
            />
          </div>
          <div className={styles.featuredJob__jobInfographicContainer}>
            <div className={styles.featuredJob__jobInfographicRow}>
              <div className={styles.featuredJob__infographicIcon}>M</div>
              <p className={styles.featuredJob__infographicText}>
                Los Angeles, California USA
              </p>
            </div>
            <div className={styles.featuredJob__jobInfographicRow}>
              <div className={styles.featuredJob__infographicIcon}>M</div>
              <p className={styles.featuredJob__infographicText}>
                2-3 years experience
              </p>
            </div>
            <div className={styles.featuredJob__jobInfographicRow}>
              <div className={styles.featuredJob__infographicIcon}>M</div>
              <p className={styles.featuredJob__infographicText}>
                Graduation from any discipline. Flexible for the right
                candidates
              </p>
            </div>
            <div className={styles.featuredJob__jobInfographicRow}>
              <div className={styles.featuredJob__infographicIcon}>M</div>
              <p className={styles.featuredJob__infographicText}>
                Apply Before 28 Feb 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
