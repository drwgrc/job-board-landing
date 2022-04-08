import Hero from './../components/Hero/Hero';
import CreateAccount from './../components/CreateAccount/CreateAccount';
import TopCategories from './../components/TopCategories/TopCategories';
import FeaturedJob from './../components/FeaturedJob/FeaturedJob';
import Statistics from './../components/Statistics/Statistics';
import CandidateOfDay from './../components/CandidateOfDay/CandidateOfDay';
import Candidates from './../components/Candidates/Candidates';
import Testimonials from './../components/Testimonials/Testimonials';
import CTA from './../components/CTA/CTA';
import Clients from './../components/Clients/Clients';
import Blog from '../components/Blog/Blog';
import DownloadApp from '../components/DownloadApp/DownloadApp';
import Subscription from '../components/Subscription/Subscription';

const Home = () => {
  return (
    <div>
      <Clients />
      <Blog />
      <DownloadApp />
      <Subscription />
    </div>
  );
};

export default Home;
