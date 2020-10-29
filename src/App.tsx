import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import RecipeList from './components/RecipeList';

function Main({ darkModeDefault = false }) {

  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Content />
      <Footer />
    </>
  )
}

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {/* Login Component Here... */}
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
