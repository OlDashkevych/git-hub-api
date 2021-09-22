import React from 'react';
import Search from '../../components/Search';
import ResultsList from '../../components/ResultsList';

import styles from './HomePage.module.css';

const HomeView: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Git hub users search app</h1>
      <Search />
      <ResultsList />
    </>
  );
};

export default HomeView;
