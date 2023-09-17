import React from 'react';
import useHeaderScroll from '../hooks/useHeaderScroll';

const Header = ({ toggleViewType }) => {
  const isHeaderHidden = useHeaderScroll();

  return (
    <header className={`header ${isHeaderHidden ? 'hidden' : ''}`}>
      <div className="header-left">
        <h2>Book Extracts - Pan Macmillan</h2>
      </div>
      <div className="header-right">
        <a href="#" role="button" onClick={toggleViewType}>Toggle View</a>
      </div>
    </header>
  );
};

export default Header;
