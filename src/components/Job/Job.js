import styles from './Job.module.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useState } from 'react';
import cls from 'classnames';

const Job = ({ job }) => {
  const [isHeartActive, setHeartActive] = useState(false);

  const heartToggle = () => {
    setHeartActive(!isHeartActive);
  };

  return (
    <div className={styles.box}>
      <span
        className={cls(
          styles.heartWrapper,
          isHeartActive ? `${styles.active}` : ''
        )}
        onClick={heartToggle}
      >
        {isHeartActive ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
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
          <div>
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
};

export default Job;
