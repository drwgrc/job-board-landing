import Hero from './../components/Hero/Hero';
import CreateAccount from './../components/CreateAccount/CreateAccount';
import TopCategories from './../components/TopCategories/TopCategories';
import FeaturedJob from './../components/FeaturedJob/FeaturedJob';
import Statistics from './../components/Statistics/Statistics';
import CandidateOfDay from './../components/CandidateOfDay/CandidateOfDay';
import Candidates from './../components/Candidates/Candidates';
import Testimonials from './../components/Testimonials/Testimonials';
import CTA from './../components/CTA/CTA';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <div className='container'>
        <div className={styles.home__container}>
          <CreateAccount />
          <TopCategories />
          <FeaturedJob />
          <Statistics />
          <CandidateOfDay />
          <Candidates />
          <Testimonials />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Home;
