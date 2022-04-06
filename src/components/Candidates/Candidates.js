import styles from "./Candidates.module.scss";
import candidateImg from "./../../assets/images/featured-job-img.jpg";

const Candidates = () => {
  return (
    <div className={styles.candidates}>
      <div className={styles.candidates__container}>
        <div className={styles.candidates__textRow}>
          <h3 className={styles.candidates__header}>
            Find <b>Candidates</b>
            <br />
            From Recent{" "}
            <span className={styles.candidates__headerColor}>CVs</span>
          </h3>

          <p className={styles.candidates__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius
            beatae officiis.
          </p>

          <div className={styles.candidates__btnWrapper}>
            <a href='#' className={styles.candidates__browseBtn}>
              Browse All Candidates
            </a>
          </div>
        </div>
        <div className={styles.candidates__candidatesContainer}>
          <div className={styles.candidates__candidateWrapper}>
            <div className={styles.candidates__candidateContainer}>
              <div className={styles.candidates__imgWrapper}>
                <img src={candidateImg} className={styles.candidates__img} />
              </div>
              <div className={styles.candidates__textBox}>
                <p className={styles.candidates__name}>Eva Anderson</p>
                <div className={styles.candidates__stat}>
                  <div className={styles.candidates__statIcon}>W</div>
                  <div className={styles.candidates__statName}>UI Designer</div>
                </div>
                <div className={styles.candidates__stat}>
                  <div className={styles.candidates__statIcon}>W</div>
                  <div className={styles.candidates__statName}>
                    +7 Years Experience
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.candidates__candidateHoverWrapper}>
              <div className={styles.candidates__candidateHoverBtnWrapper}>
                <a className={styles.candidates__candidateHoverBtn}>
                  View Profile
                </a>
              </div>
            </div>
          </div>
          <div className={styles.candidates__candidateWrapper}>
            <div className={styles.candidates__candidateContainer}>
              <div className={styles.candidates__imgWrapper}>
                <img src={candidateImg} className={styles.candidates__img} />
              </div>
              <div className={styles.candidates__textBox}>
                <p className={styles.candidates__name}>Eva Anderson</p>
                <div className={styles.candidates__stat}>
                  <div className={styles.candidates__statIcon}>W</div>
                  <div className={styles.candidates__statName}>UI Designer</div>
                </div>
                <div className={styles.candidates__stat}>
                  <div className={styles.candidates__statIcon}>W</div>
                  <div className={styles.candidates__statName}>
                    +7 Years Experience
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.candidates__candidateHoverWrapper}>
              <div className={styles.candidates__candidateHoverBtnWrapper}>
                <a className={styles.candidates__candidateHoverBtn}>
                  View Profile
                </a>
              </div>
            </div>
          </div>
          <div className={styles.candidates__candidateWrapper}>
            <div className={styles.candidates__candidateContainer}>
              <div className={styles.candidates__imgWrapper}>
                <img src={candidateImg} className={styles.candidates__img} />
              </div>
              <div className={styles.candidates__textBox}>
                <p className={styles.candidates__name}>Eva Anderson</p>
                <div className={styles.candidates__stat}>
                  <div className={styles.candidates__statIcon}>W</div>
                  <div className={styles.candidates__statName}>UI Designer</div>
                </div>
                <div className={styles.candidates__stat}>
                  <div className={styles.candidates__statIcon}>W</div>
                  <div className={styles.candidates__statName}>
                    +7 Years Experience
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.candidates__candidateHoverWrapper}>
              <div className={styles.candidates__candidateHoverBtnWrapper}>
                <a className={styles.candidates__candidateHoverBtn}>
                  View Profile
                </a>
              </div>
            </div>
          </div>
          <div className={styles.candidates__candidateWrapper}>
            <div className={styles.candidates__candidateContainer}>
              <div className={styles.candidates__imgWrapper}>
                <img src={candidateImg} className={styles.candidates__img} />
              </div>
              <div className={styles.candidates__textBox}>
                <p className={styles.candidates__name}>Eva Anderson</p>
                <div className={styles.candidates__stat}>
                  <div className={styles.candidates__statIcon}>W</div>
                  <div className={styles.candidates__statName}>UI Designer</div>
                </div>
                <div className={styles.candidates__stat}>
                  <div className={styles.candidates__statIcon}>W</div>
                  <div className={styles.candidates__statName}>
                    +7 Years Experience
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.candidates__candidateHoverWrapper}>
              <div className={styles.candidates__candidateHoverBtnWrapper}>
                <a className={styles.candidates__candidateHoverBtn}>
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
