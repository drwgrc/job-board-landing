import styles from './PostJob.module.css';
import { ReactComponent as JobBoardSVG } from '../../assets/images/post-job.svg';
import PostAddIcon from '@mui/icons-material/PostAdd';

const PostJob = () => {
  return (
    <section className={styles.postJob}>
      <div className='container'>
        <div className={styles.content}>
          <div>
            <span>FOR RECRUITERS</span>
            <h2>Do You Have A Position To Post Job?</h2>
            <p>
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
              Morbi mattis ullamcorper velit.
            </p>
            <button>
              <span className={styles.iconWrapper}>
                <PostAddIcon />
              </span>
              <span>Post A Job</span>
              <span className={styles.styling} />
            </button>
          </div>
          <div>
            <span>
              <span className={styles.vectorWrapper}>
                <JobBoardSVG />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostJob;
