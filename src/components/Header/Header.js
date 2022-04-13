import styles from './Header.module.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { ReactComponent as HeroSVG } from '../../assets/images/hero-illustration.svg';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setScrolling(window.pageYOffset > 200);
      });
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${scrolling ? `${styles.scrolled}` : ``}`}>
        <div>
          <div className={styles.logo}>NUJOBS</div>
          <div className={styles.desktopLinks}>
            <a href='#'>Home</a>
            <a href='#'>Jobs</a>
            <a href='#'>Candidates</a>
            <a href='#'>Employers</a>
            <a href='#'>Blog</a>
            <a href='#'>Contact</a>
          </div>
          <div className={styles.space} />
          <div className={styles.links}>
            <div>
              <button>
                <SearchOutlinedIcon />
              </button>
            </div>
            <div>
              <button>
                <LanguageOutlinedIcon />
              </button>
            </div>
            <hr />
          </div>
          <div className={styles.mobileMenu}>
            <button>
              <MenuOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={`${scrolling ? `${styles.scrolling}` : ``}`} />
    </header>
  );
};

export default Header;
