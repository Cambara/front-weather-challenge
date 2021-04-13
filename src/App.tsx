import React from 'react';
import Home from './pages/Home';

import GlobalStyles from './styles/GlobalStyles'

const App:React.FC = () => {
  return (
    <div>
      <Home/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
