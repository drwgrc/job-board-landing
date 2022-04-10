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
    <div>
      <HotCategories />
      <GlobalConnections />
      <PostJob />
      <Testminonials />
      <Clients />
      <Blog />
      <DownloadApp />
      <Subscription />
    </div>
  );
};

export default Home;
