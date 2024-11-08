import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { searchNotes } from '~/utils/noteutility';

interface SearchBarProps {
    setNotes: React.Dispatch<React.SetStateAction<any[]>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setNotes }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchResults = searchNotes(query, undefined);
    setNotes(searchResults);
  };

  return (
    <div className="mx-auto my-0 block text-center">
      <form onSubmit={handleSearch}>
        <input
          type='search'
          placeholder='Looking for something?'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 w-2/5"
        />
        <button type='submit' className='button rounded-none'>
          <SearchOutlined />
        </button>
      </form>
    </div>
  );
};