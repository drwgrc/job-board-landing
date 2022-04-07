import Hero from './../components/Hero/Hero';
import CreateAccount from './../components/CreateAccount/CreateAccount';
import TopCategories from './../components/TopCategories/TopCategories';
import FeaturedJob from './../components/FeaturedJob/FeaturedJob';
import Statistics from './../components/Statistics/Statistics';
import CandidateOfDay from './../components/CandidateOfDay/CandidateOfDay';
import Candidates from './../components/Candidates/Candidates';
import Testimonials from './../components/Testimonials/Testimonials';
import CTA from './../components/CTA/CTA';
import Subscription from '../components/Subscription/Subscription';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Subscription />
    </div>
  );
};

export default Home;
