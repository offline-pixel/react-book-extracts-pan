import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/table/Table';
import Loader from './components/Loader';
import { Helmet } from 'react-helmet';
import { bookExtractColumns } from './pages//book-extracts/bookExtractColumns';
import { useApi } from './context/ApiContext';

function App() {
  const api = useApi();
  const [viewType, setViewType] = useState('grid'); // Initially set to 'grid'

  const toggleViewType = () => {
    setViewType(viewType === 'grid' ? 'list' : 'grid'); // Toggle between 'grid' and 'list'
  };

  return (
    <div className="App">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Book Extracts from Pan Macmillan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <Header toggleViewType={toggleViewType} />
      <main className="main">
        {api.loading ? (
          <Loader />
        ) : (
          <Table data={api.data} columns={bookExtractColumns} viewType={viewType} />
        )}
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default App;
