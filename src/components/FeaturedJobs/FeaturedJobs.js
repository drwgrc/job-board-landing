import styles from './FeaturedJobs.module.css';
import JOBS from './FeaturedJobs.data';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useState } from 'react';
import cls from 'classnames';

const FeaturedJobs = () => {
  const [isHeartActive, setHeartActive] = useState(false);

  const heartToggle = () => {
    setHeartActive(!isHeartActive);
  };

  return (
    <section className={styles.featuredJobs}>
      <div className='container'>
        <div className={styles.text}>
          <div>
            <span>Featured Jobs</span>
          </div>
          <div>
            <h3>
              Jobs available apply to Editorial Specialist, Account Manager,
              Human Resources Specialist and more!
            </h3>
          </div>
        </div>
        <div className={styles.grid}>
          {JOBS.map((job, index) => {
            return (
              <div key={index} className={styles.box}>
                <span
                  className={cls(
                    styles.heartWrapper,
                    isHeartActive ? `${styles.active}` : ''
                  )}
                  onClick={heartToggle}
                >
                  {isHeartActive ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderOutlinedIcon />
                  )}
                  <span className={styles.styling} />
                </span>
                <div className={styles.top}>
                  <div>
                    <span>
                      <span className={styles.logoWrapper}>
                        <img src={job.imgUrl} />
                      </span>
                    </span>
                  </div>
                  <div>
                    <a href='#'>{job.title}</a>
                    <p>{job.company}</p>
                    <div className={styles.location}>
                      <LocationOnOutlinedIcon />
                      {job.location}
                    </div>
                  </div>
                  <span>Posted day: {job.posted}</span>
                </div>
                <hr />
                <div className={styles.bottom}>
                  <div>
                    <div>
                      <SignalCellularAltOutlinedIcon />
                      {job.experience} year exp
                    </div>
                  </div>
                  <div>
                    <div>
                      <AccessTimeOutlinedIcon />
                      {job.type}
                    </div>
                  </div>
                  <div>
                    <div>
                      <LocalAtmOutlinedIcon />
                      {job.pay}
                    </div>
                  </div>
                  <div>
                    <div>
                      <PersonOutlineOutlinedIcon />
                      {job.level}
                    </div>
                  </div>
                </div>
              </div>
            );
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
