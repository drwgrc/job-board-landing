import styles from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = () => {
  const handleFooterClick = (e) => {
    let nextSibling = e.target.nextElementSibling;
    nextSibling.classList.toggle(`${styles.open}`);
    e.target.classList.toggle(`${styles.toggleIcon}`);
  };

  return (
    <>
      <footer>
        <div className={styles.main}>
          <div className={styles.left}>
            <div>
              <div className={styles.logo}>NUJOBS</div>
              <p>
                Ex sit error iusto soluta fugiat, hic vel deserunt quod
                temporibus sint dolore quae modi inventore. Earum porro aperiam
                accusantium.
              </p>
            </div>
            <div>
              <h6>Social</h6>
              <div className={styles.socialLinks}>
                <a href='#'>
                  <button>
                    <FacebookIcon />
                  </button>
                </a>
                <a href='#'>
                  <button>
                    <InstagramIcon />
                  </button>
                </a>
                <a href='#'>
                  <button>
                    <LinkedInIcon />
                  </button>
                </a>
                <a href='#'>
                  <button>
                    <TwitterIcon />
                  </button>
                </a>
              </div>
            </div>
            <div>
              <div className={styles.stayInTouch}>
                <h6>Let's stay in touch</h6>
                <span>
                  Unsubscribe to our newsletter to receive latest articles to
                  your inbox weekly.
                </span>
              </div>
              <div className={styles.subscribe}>
                <input placeholder='Email address' />
                <button>Subscribe</button>
              </div>
            </div>
            <div>
              <h6>Apps</h6>
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
          </div>
          <div className={styles.right}>
            <div className={styles.mobileLinks}>
              <div>
                <h6 onClick={(e) => handleFooterClick(e)}>
                  Platform
                  <KeyboardArrowDownIcon />
                </h6>
                <div className={styles.links}>
                  <div className={styles.linksWrapper}>
                    <div className={styles.linksInner}>
                      <div className={styles.linksGrid}>
                        <a href='#'>Home</a>
                        <a href='#'>Jobs</a>
                        <a href='#'>Candidates</a>
                        <a href='#'>Employers</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Contact</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h6 onClick={(e) => handleFooterClick(e)}>
                  Useful Links
                  <KeyboardArrowDownIcon />
                </h6>
                <div className={styles.links}>
                  <div className={styles.linksWrapper}>
                    <div className={styles.linksInner}>
                      <div className={styles.linksGrid}>
                        <a href='#'>Signup as Employer</a>
                        <a href='#'>Signup as Candidate</a>
                        <a href='#'>Career</a>
                        <a href='#'>FAQs</a>
                        <a href='#'>Privacy</a>
                        <a href='#'>Terms & Conditions</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.desktopLinks}>
              <div className={styles.linksCol}>
                <h6>Platform</h6>
                <a href='#'>Home</a>
                <a href='#'>Jobs</a>
                <a href='#'>Candidates</a>
                <a href='#'>Employers</a>
                <a href='#'>Blog</a>
                <a href='#'>Contact</a>
              </div>
              <div className={styles.linksCol}>
                <h6>Useful Links</h6>
                <a href='#'>Signup as Employer</a>
                <a href='#'>Signup as Candidate</a>
                <a href='#'>Career</a>
                <a href='#'>FAQs</a>
                <a href='#'>Privacy</a>
                <a href='#'>Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className={styles.footerLine} />
      <div className={styles.bottom}>
        <div>
          <p>&copy; 2022. All rights reserved</p>
          <div>
            <a href='#'>Help Center</a>
            <a href='#'>Terms of Service</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
