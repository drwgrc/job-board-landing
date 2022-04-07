import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoadSpinner from './components/LoadSpinner/LoadSpinner';
import { useState } from 'react';

export default function App() {
  const [isLoading, setLoading] = useState(true);

  // timer for spinner
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div>
      {isLoading && <LoadSpinner />}
      {!isLoading && (
        <>
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}
