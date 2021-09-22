import React from 'react';
import { BlockLoading } from 'react-loadingg';
import { useSelector } from 'react-redux';
import * as postsSelectors from '../../redux/posts/selector';

const Loader = () => {
  const postsLoading: boolean = useSelector(postsSelectors.getLoading);

  const loading = postsLoading;
  return <>{loading && <BlockLoading />}</>;
};

export default Loader;
