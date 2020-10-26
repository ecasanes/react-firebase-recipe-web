import React, {useState} from 'react';
import './App.scss';

import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';

function App({ darkModeDefault = false }) {

  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}  />
      <Content />
      <Footer />
    </>
  );
}

export default App;
