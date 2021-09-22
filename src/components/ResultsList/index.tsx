import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getItems } from '../../redux/posts/selector';

const ResultsList = () => {
  const [searchHistory, setHistory] = useState([]);
  const items = useSelector(getItems);
  const history = localStorage.getItem('history');
  useEffect(() => {
    if (history) {
      setHistory(JSON.parse(history));
    }
  }, [history]);

  return (
    <div className="results-container">
      {searchHistory.length > 0 ? (
        <div className="search-history">
          search-history:{' '}
          {searchHistory.map(e => {
            if (!e) return;
            return `${e} | `;
          })}
        </div>
      ) : (
        ''
      )}
      <ul className="results-list">
        {items.map(e => (
          <li className="results-item" key={e.id}>
            <h5>{e.login}</h5>
            <img className="results-avatar" src={e.avatar_url} alt="" />
            <a target="_blank" rel="noopener noreferrer" href={e.html_url}>
              To page
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
