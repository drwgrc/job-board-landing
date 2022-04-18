import styles from './Hero.module.css';
import { ReactComponent as HeroSVG } from '../../assets/images/hero-illustration.svg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.content}>
          <div>
            <div className={styles.contentContainer}>
              <div className={styles.top}>
                <h1>
                  Get The <span>Career</span> You Deserve
                </h1>
                <p>
                  Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                  laoreet sapien, quis venenatis ante odio sit amet eros.
                </p>
              </div>
              <div className={styles.search}>
                <div>
                  <div>
                    <div className={styles.section}>
                      <div>
                        <SearchOutlinedIcon />
                        <input placeholder='Job title, keywords' />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div>
                    <div className={styles.section}>
                      <div>
                        <LocationOnOutlinedIcon />
                        <input placeholder='Locations' />
                      </div>
                    </div>
                  </div>
                </div>
                <button>
                  <SearchOutlinedIcon />
                </button>
              </div>
              <div className={styles.companies}>
                <div>
                  <span className={styles.companyLogoWrapper} />
                </div>
                <div>
                  <span className={styles.companyLogoWrapper} />
                </div>
                <div>
                  <span className={styles.companyLogoWrapper} />
                </div>
                <div>
                  <span className={styles.companyLogoWrapper} />
                </div>
              </div>
              <div className={styles.stats}>
                <div className={styles.statsRow}>
                  <div>
                    <h4>2m+</h4>
                    <p>Jobs</p>
                  </div>
                  <hr />
                  <div>
                    <h4>500k+</h4>
                    <p>Successful Hiring</p>
                  </div>
                </div>
                <hr />
                <div className={styles.statsRow}>
                  <div>
                    <h4>250k+</h4>
                    <p>Partners</p>
                  </div>
                  <hr />
                  <div>
                    <h4>156k+</h4>
                    <p>Candidates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span>
              <span className={styles.vectorWrapper}>
                <HeroSVG />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const MyComponent = () => {
  const [highlight, setHighlight] = useState(false);

  const handleClick = () => {
    setHighlight(!highlight);
    console.log('clicked');
  };

  return (
    <div>
      <h1 className={`element ${highlight ? 'hightlight' : ''}`}>Hello word</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
