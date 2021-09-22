import React, { useState, useEffect } from 'react';

import { DebounceInput } from 'react-debounce-input';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../redux/posts/operations';

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleQueryChange = ({ target }) => {
    setQuery(target.value);
    const history = localStorage.getItem('history');
    let historyArr;

    if (history) {
      historyArr = [...JSON.parse(history)];
      historyArr.unshift(target.value);
      historyArr.length = 5;
    } else {
      historyArr = [target.value];
    }

    localStorage.setItem('history', JSON.stringify(historyArr));
  };

  useEffect(() => {
    if (!query) {
      dispatch({ type: 'CLEAR_LIST' });
      return;
    }
    dispatch(getUsers(query));
  }, [dispatch, query]);

  return (
    <div className="search-container">
      <DebounceInput
        className="search-input"
        minLength={1}
        debounceTimeout={500}
        onChange={handleQueryChange}
      />
    </div>
  );
};

export default Search;
