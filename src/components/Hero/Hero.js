import styles from './Hero.module.scss';
import { ReactComponent as TagsIcon } from './../../assets/icons/tags.svg';
import { ReactComponent as CategoryIcon } from './../../assets/icons/category.svg';
import { ReactComponent as LocationIcon } from './../../assets/icons/location.svg';
import { ReactComponent as ChartIcon } from './../../assets/icons/chart.svg';
import { ReactComponent as EtsyLogo } from './../../assets/images/etsy.svg';
import { ReactComponent as GoogleLogo } from './../../assets/images/google.svg';
import { ReactComponent as MicrosoftLogo } from './../../assets/images/microsoft.svg';
import amazonLogo from './../../assets/images/amazon.png';
import ebayLogo from './../../assets/images/ebay.png';
import slackLogo from './../../assets/images/slack.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__textContainer}>
          <h3 className={styles.hero__header}>
            <span className={styles.hero__headerColor}>+25,000</span> Jobs Are
            Posted Daily
            <br />
            Find Your <span style={{ fontWeight: 'bold' }}>Dream</span> One
            Here!
          </h3>
          <p className={styles.hero__subHeader}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            assumenda, perspiciatis non nulla iure accusantium dignissimos
            aperiam tenetur dolore aliquid consequatur porro mollitia fuga optio
            rerum et velit veniam quos.
          </p>
        </div>
        <div className={styles.hero__jobSearchWrapper}>
          <div className={styles.hero__jobSearchContainer}>
            <div className={styles.hero__jobSearchInputs}>
              <div className={styles.hero__jobSearchInputContainer}>
                <div className={styles.hero__jobSearchIconWrapper}>
                  <TagsIcon className={styles.hero__jobSearchIcon} />
                </div>
                <input
                  className={styles.hero__jobSearchInput}
                  placeholder='Keyword e.g. (Job Title, Tags)'
                ></input>
              </div>
              <div className={styles.hero__jobSearchInputContainer}>
                <div className={styles.hero__jobSearchIconWrapper}>
                  <CategoryIcon className={styles.hero__jobSearchIcon} />
                </div>
                <select className={styles.hero__jobSearchInput} id='category'>
                  <option selected>Category</option>
                </select>
              </div>
              <div className={styles.hero__jobSearchInputContainer}>
                <div className={styles.hero__jobSearchIconWrapper}>
                  <LocationIcon className={styles.hero__jobSearchIcon} />
                </div>
                <select className={styles.hero__jobSearchInput} id='location'>
                  <option selected>Select Location</option>
                </select>
              </div>
              <div className={styles.hero__jobSearchInputContainer}>
                <div className={styles.hero__jobSearchIconWrapper}>
                  <ChartIcon className={styles.hero__jobSearchIcon} />
                </div>
                <select className={styles.hero__jobSearchInput} id='experience'>
                  <option selected>Experience</option>
                </select>
              </div>
            </div>
            <div className={styles.hero__jobSearchBtnContainer}>
              <p className={styles.hero__jobSearchBtnText}>
                Find
                <br />
                Job
              </p>
              <a href='#' className={styles.hero__jobSearchBtn}>
                <div className={styles.hero__jobSearchBtnIconWrapper}>
                  <TagsIcon className={styles.hero__jobSearchBtnIcon} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.hero__partnersWrapper}>
          <h3 className={styles.hero__partnersTitle}>We Are Trusted By</h3>
          <div className={styles.hero__partnersBrands}>
            <div className={styles.hero__partnerBrand}>
              <EtsyLogo className={styles.hero__partnerLogo} />
            </div>
            <div className={styles.hero__partnerBrand}>
              <GoogleLogo className={styles.hero__partnerLogo} />
            </div>
            <div className={styles.hero__partnerBrand}>
              <img className={styles.hero__partnerLogo} src={slackLogo} />
            </div>
            <div className={styles.hero__partnerBrand}>
              <MicrosoftLogo className={styles.hero__partnerLogo} />
            </div>
            <div className={styles.hero__partnerBrand}>
              <img className={styles.hero__partnerLogo} src={ebayLogo} />
            </div>
            <div className={styles.hero__partnerBrand}>
              <img className={styles.hero__partnerLogo} src={amazonLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
