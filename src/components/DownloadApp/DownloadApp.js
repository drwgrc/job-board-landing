import styles from './DownloadApp.module.css';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

const DownloadApp = () => {
  return (
    <section className={styles.downloadApp}>
      <div className='container'>
        <div className={styles.content}>
          <div>
            <h2>Download App</h2>
            <p>
              Now finding the new job just got even easier with our new app!
            </p>
            <div className={styles.appBtns}>
              <button>
                <span>
                  <AppleIcon />
                </span>
                <div>
                  <span>Download on the</span>
                  <h6>Apple Store</h6>
                </div>
              </button>
              <button>
                <span>
                  <GoogleIcon />
                </span>
                <div>
                  <span>Download From</span>
                  <h6>Google Play</h6>
                </div>
              </button>
            </div>
          </div>
          <div>
            <span>
              <span className={styles.imgWrapper}>
                <img alt='mobile phone' src='/images/download-app.png' />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
