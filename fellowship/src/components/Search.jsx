import React, { useState } from 'react'
import './Search.css'

const Search = ({ setSearch, ifSearchingInsideChat, activeUsersLength }) => {
  const [inputClassName, setInputClassName] = useState('');

  const getPlaceholder = () => {
    if (ifSearchingInsideChat) {
      return `search: number of online users: ${activeUsersLength}`;
    }
    return 'Search';
  };

  return (
    <>
      <div className='sidebar_search'>
        <form>
          <input
            type='search'
            onChange={(e) => {
              setSearch(e.target.value);
              // Check if something is typed and apply className accordingly
              if (e.target.value.trim() !== '') {
                setInputClassName('typed-input');
              } else {
                // Reset the className when input is empty
                setInputClassName('');
              }
            }}
            placeholder={getPlaceholder()} // Use the dynamically determined placeholder
            className={inputClassName}
          />
          <div className='search_unicode'>&#9906;</div>
        </form>
      </div>
    </>
  );
};


export default Search
