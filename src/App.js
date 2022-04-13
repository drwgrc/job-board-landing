import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoadSpinner from './components/LoadSpinner/LoadSpinner';
import MenuModal from './components/MenuModal/MenuModal';
import { useState } from 'react';

export default function App() {
  const [isLoading, setLoading] = useState(true);

  // timer for spinner
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <div>
      {isLoading && <LoadSpinner />}
      {!isLoading && (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
      <MenuModal />
    </div>
  );
}
