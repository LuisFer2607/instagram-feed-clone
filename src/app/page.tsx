import React from 'react';
import NavBar from '../components/NavBar';
import Feed from '../components/Feed';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Feed />
    </div>
  );
};

export default HomePage;
