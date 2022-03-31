import styles from './CandidateOfDay.module.scss';

const CandidateOfDay = () => {
  return (
    <div className={styles.candidateOfDay}>
      <div className={styles.candidateOfDay__container}>
        <div className={styles.candidateOfDay__textBox}>
          <h2 className={styles.candidateOfDay__header}>
            <span className={styles.candidateOfDay__headerColor}>
              Candidate
            </span>{' '}
            of the <b>Day</b>
          </h2>
          <div className={styles.candidateOfDay__candidateInfo}>
            <div className={styles.candidateOfDay__img} />
            <span className={styles.candidateOfDay__name}>Eva Anderson</span>
          </div>
          <p className={styles.candidateOfDay__title}>Senior UI Designer</p>
          <p className={styles.candidateOfDay__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            illo hic, iste vitae consequatur sint. Fugiat nam exercitationem sit
            dicta ipsa hic itaque placeat veniam sint, quam nihil quaerat
            labore.
          </p>
          <div className={styles.candidateOfDay__stats}>
            <div className={styles.candidateOfDay__stat}>
              <div className={styles.candidateOfDay__statIcon}>W</div>
              <span className={styles.candidateOfDay__statName}>
                UI Designer
              </span>
            </div>
            <div className={styles.candidateOfDay__stat}>
              <div className={styles.candidateOfDay__statIcon}>W</div>
              <span className={styles.candidateOfDay__statName}>
                UI Designer
              </span>
            </div>
          </div>
          <a href='#' className={styles.candidateOfDay__applyBtn}>
            Hire Me
          </a>
        </div>
        <div className={styles.candidateOfDay__imgWrapper}>
          <div className={styles.candidateOfDay__imgIcon}>O</div>
        </div>
      </div>
    </div>
  );
};

export default CandidateOfDay;
