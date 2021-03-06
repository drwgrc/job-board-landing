import Hero from '../components/Hero/Hero';
import UploadResume from '../components/UploadResume/UploadResume';
import FeaturedJobs from '../components/FeaturedJobs/FeaturedJobs';
import TopCompanies from '../components/TopCompanies/TopCompanies';
import HotCategories from '../components/HotCategories/HotCategories';
import GlobalConnections from '../components/GlobalConnections/GlobalConnections';
import PostJob from '../components/PostJob/PostJob';
import Testminonials from '../components/Testimonials/Testimonials';
import Clients from '../components/Clients/Clients';
import Blog from '../components/Blog/Blog';
import DownloadApp from '../components/DownloadApp/DownloadApp';
import Subscription from '../components/Subscription/Subscription';

const Home = () => {
  return (
    <>
      <Hero title='Rawan' color='red' />
      <UploadResume />
      <FeaturedJobs />
      <TopCompanies />
      <HotCategories />
      <GlobalConnections />
      <PostJob />
      <Testminonials />
      {/* <Clients /> */}
      <Blog />
      <DownloadApp />
      <Subscription />
    </>
  );
};

export default Home;
